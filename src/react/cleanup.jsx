import { useState, useEffect } from "react";

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Pandav Mohit",
                age: 20,
            });
        }, 2000);
    });
}

function UserComp1() {
    const [id, setId] = useState("loading...");
    const [name, setName] = useState("loading...");
    const [isVisible, setIsVisible] = useState(true); 

    useEffect(() => {
        let isMounted = true; 
        fetchUserData().then((user) => {
            if (isMounted) {
                setId(user.id);
                setName(user.name);
            }
        });

        return () => {
            isMounted = false; 
        };
    }, []); 

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev); 
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? "Hide" : "Show"} User Info
            </button>
            {isVisible && (
                <div>
                    Id: {id} <br />
                    Name: {name}
                </div>
            )}
        </div>
    );
}

export default UserComp1;