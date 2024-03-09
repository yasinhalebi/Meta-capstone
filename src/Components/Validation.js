import "./Validation.css";
export default function Validation(){
    return(
        <div className="parent">
            <h1>FIND A TABLE FOR ANY OCCASION</h1>
            <form>
                <div className="name">
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                    <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                </div>
                <div className="contact">
                    <input type="email" id="email" name="email" placeholder="e-mail" required />
                    <input type="tel" id="tel" name="tel" placeholder="Phone Number" required />
                </div>
                <div className="date">
                    <input type="date" id="date" name="date" placeholder="Date" required />
                    <input type="time" id="time" name="time" placeholder="Time" required />
                </div>
                <div className="details">
                    <input type="number" id="number" name="number" placeholder="Number of Guests" required />
                    <select id="selectOption" name="selectOption" required>
                        <option value="">-- Select One --</option>
                        <option value="option1">Birthday</option>
                        <option value="option2">Engagment</option>
                        <option value="option3">Anniversary</option>
                        <option value="option4">Wedding</option>
                    </select>
                </div>
                <div className="btn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}