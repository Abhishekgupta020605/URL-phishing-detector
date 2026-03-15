# URL Phishing Detector

A simple cybersecurity tool that detects **suspicious and phishing URLs** using JavaScript.
This project analyzes URLs for common phishing patterns and provides a **risk level indicator**.

## 🚀 Features

* URL format validation
* Detects suspicious keywords in URLs
* Detects IP address-based URLs
* Identifies risky domain extensions (TLDs)
* Risk score with security percentage
* Displays Safe / Suspicious / High Risk result

## 🛠 Technologies Used

* HTML
* CSS
* JavaScript

## 🔍 How It Works

The tool analyzes the entered URL using multiple rules:

* Checks if the URL uses **HTTP instead of HTTPS**
* Detects phishing tricks like **@ symbol in URL**
* Identifies **IP addresses used as domains**
* Detects **suspicious keywords** such as login, verify, update
* Checks **suspicious domain extensions** (.ru, .xyz, .tk, etc.)

Based on these checks, the tool calculates a **risk score** and displays the result.

## ▶️ How to Use

1. Enter a URL in the input box.
2. Click the **Check URL** button.
3. The tool will analyze the URL and display the security result.

## 📂 Project Structure

index.html
style.css
script.js

## ⚠️ Disclaimer

This project is for **educational and cybersecurity learning purposes only**.
It does not guarantee 100% phishing detection.

## 👨‍💻 Author

Abhishek Gupta
