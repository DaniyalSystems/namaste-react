import React, {useState, useEffect} from 'react';

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        // addEventListener version
        window.addEventListener("online", () => {
            console.log("You are now connected to the network.");
            setOnlineStatus(true);
        });

        window.addEventListener("offline", () => {
            console.log("You are not connected to the network.");
            setOnlineStatus(false);
        });

    }, []);
    return onlineStatus;
};

export default useOnlineStatus;