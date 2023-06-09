


import React from 'react';

const Extra = () => {
    return (
        <div>
            <div>
                <header>
                    <h1>Meet Our Sports Coach</h1>
                </header>
                <main>
                    <div className="coach-profile">
                        <img src="john-doe.jpg" alt="John Doe" />
                        <h2>John Doe</h2>
                        <p>Specialization: Football</p>
                        <p>Experience: 5 years</p>
                        <p>Bio: John Doe is an experienced football coach...</p>
                    </div>
                    <div className="coach-profile">
                        <img src="jane-smith.jpg" alt="Jane Smith" />
                        <h2>Jane Smith</h2>
                        <p>Specialization: Basketball</p>
                        <p>Experience: 8 years</p>
                        <p>Bio: Jane Smith is a passionate basketball coach...</p>
                    </div>
                    <div className="coach-profile">
                        <img src="mike-johnson.jpg" alt="Mike Johnson" />
                        <h2>Mike Johnson</h2>
                        <p>Specialization: Swimming</p>
                        <p>Experience: 10 years</p>
                        <p>Bio: Mike Johnson has been coaching swimming for a decade...</p>
                    </div>
                    <div className="coach-profile">
                        <img src="sarah-wilson.jpg" alt="Sarah Wilson" />
                        <h2>Sarah Wilson</h2>
                        <p>Specialization: Tennis</p>
                        <p>Experience: 3 years</p>
                        <p>Bio: Sarah Wilson is a dedicated tennis coach...</p>
                    </div>
                </main>
                <footer>
                    <p>&copy; 2023 Sports Coach. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Extra;