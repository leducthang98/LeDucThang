# Software Module Specification

## Introduction

This document outlines the specification for a backend application server module designed to manage and update a scoreboard on a website. The module is responsible for receiving score updates from authenticated users, updating the scores in real time, and ensuring the integrity and security of the score update process to prevent unauthorized manipulations.

## System Overview

The Scoreboard Management Module (SMM) serves as an intermediary between the website's frontend and the database, handling API calls related to score updates, authentication, and real-time score display. It ensures that only authenticated and authorized actions result in score updates. The SMM employs WebSockets for real-time communication with the frontend to update the scoreboard without requiring page refreshes.

## Features

1. Authentication & Authorization: Ensures that only authenticated users can send score update requests. Incorporates mechanisms to verify that the action leading to a score update is authorized and legitimate.

2. Score Update Handling: Processes score update requests from authenticated and authorized users, updating the user's score in the database accordingly.

3. Real-Time Scoreboard Updates: Utilizes WebSockets to push updated scores to all connected clients in real-time, ensuring that the scoreboard displayed on the website is always current.

4. Top 10 Scores Display: The module retrieves and updates the top 10 user scores from the database, ensuring that the scoreboard only displays the highest scores.


## Improvement Suggestions

The systeom should use native Websocket instead of SocketIO, due to low-latency of websocket. SocketIO is library that abtracted from Websocket, running over HTTPS which is layer 7 while Websocket (ws) and Websocket secure (wss) running as a UDP protocol to broadcast the message at layer 3. It offers a lightweight, all kind of system support, and low-latency.

To prevent authorization attack, we should have CAPCHA or reCAPCHA to prevent script attack. Moreover, from backend side we should have WAF to prevent DDoS and abnormal access. 

Database should use Redis, with in-memory database and stream, which is a highly recommended for streaming and live system. And, to improve high availability of Redis we can upgrade to use Redis cluster or Redis sentinel.