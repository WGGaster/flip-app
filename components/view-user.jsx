import generateProfile from "../utils/mock-users";
import { useState } from "react";
import '../css/view-user.css'


function ViewUser() {
    const user = generateProfile()
    console.log('Ссылка на фото:', user.photo);
    return (
        <>
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
        </>
    )
}

export default ViewUser;