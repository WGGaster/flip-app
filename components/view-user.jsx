import generateProfile from "../utils/mock-users";
import TinderCard from 'react-tinder-card';
import { useState, useRef } from 'react';
import '../css/view-user.css'



const db = Array.from({length: 5}, () => generateProfile());

const FlipCard = () => {
    const [users, setUsers] = useState(db);

    const childRefs = useRef([]);

    const onSwipe = (direction, name_user) => {
        Console.log(`Карточка ${name_user} улетела в ${direction}`)
    }

    const onCardLeftScreen = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id))
    }

    const swiped = (direction, id) => {
        const index = db.findIndex(user => user.id === id);
        if (index !== -1) {
            childRefs.current[index].swipe(direction);
        }
    }

    return (
        <>
            <header className="header">
                <div className="container flip-header">

                </div>
            </header>
            <main className="main">
                <section className="app-flip">
                    <div className="container card-stack">
                        {users.map((user, index) => (
                            <TinderCard
                                ref={el => childRefs.current[index] = el}
                                key={user.id}
                                onSwipe={(dir) => onSwipe(dir, user.name)}
                                onCardLeftScreen={() => onCardLeftScreen(user.id)}
                                className="swipe-card"
                                preventSwipe={['up', 'down']}
                            >
                                <img 
                                    src={user.photo} 
                                    alt={user.name} 
                                    className="card-image" 
                                />
                                <div className="swipe-card-text">
                                    <span class='card-user-name'>
                                        {user.name}
                                    </span>
                                    <p class='card-user-status'>
                                        {user.status}
                                    </p>
                                </div>  
                            </TinderCard>
                        ))}
                    </div>
                </section>
            </main>
            <footer className="footer">
            </footer>
            
        </>
    )


}

function ViewUser() {
    const user = generateProfile()
    console.log('Ссылка на фото:', user.photo);
    return (
        <>
            <header className="header">
                <div className="container flip-header">

                </div>
            </header>
            <main className="main">
                <section className="card-user">
                    <div 
                        className="container card-user-container"
                        style={{ 
                            backgroundImage: `url(${user.photo}), url('../public/3d-cartoon-character.jpg')`
                        }}
                    >
                        <span class='card-user-name'>
                            {user.name}
                        </span>
                        <p class='card-user-status'>
                            {user.status}
                        </p>
                    </div>
                </section>
            </main>
            <footer className="footer">
            </footer>
            
        </>
    )
}

export default FlipCard;