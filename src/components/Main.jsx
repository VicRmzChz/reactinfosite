import React, { Fragment } from "react";

export function Main() {
    return (
        <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k starts on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousends of entiprise apps, including mobile apps</li>
            </ul>
        </main>
    );
}