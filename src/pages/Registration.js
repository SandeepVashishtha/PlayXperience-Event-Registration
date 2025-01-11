// src/pages/Registration.js
import React from "react";

function Registration() {
    return (
        <div>
            <h1>Event Registration</h1>
            <p>Register for your next gaming event with PlayXperience!</p>
            <form>
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="game">Select Game:</label>
                    <select id="game" name="game" required>
                        <option value="game1">Game 1</option>
                        <option value="game2">Game 2</option>
                        <option value="game3">Game 3</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Register</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Registration;
