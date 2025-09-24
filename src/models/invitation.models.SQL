DROP TABLE IF EXISTS invitation;
CREATE TABLE invitation (
    invitation_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    invited_by INT NOT NULL,  
    token VARCHAR(255) NOT NULL,
    expiry_date DATETIME NOT NULL,
    status ENUM('PENDING', 'ACCEPTED', 'EXPIRED') DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (invited_by) REFERENCES Punjab_Health_Department(user_id)
);
SELECT * FROM invitation;