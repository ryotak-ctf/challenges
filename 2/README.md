# Challenge 2: It's just an open redirect

| Challenge ID | 2 |
| :---- | :---- | 
| **Title** | It's just an open redirect |
| **Difficulty** | Easy |
| **Answer format** | Payload that executes `solve()` function when specified in the `?url=` parameter. (e.g., `https://example.com`) |
| **Solvers** | [Solvers list](https://github.com/ryotak-ctf/scoreboard/tree/main/solvers/2)  |

## Description
I reported an open redirect vulnerability to a popular company, but the triager said that it's pretty-low risk, and closed the report as Informative.  
Could you please help me to escalate this vulnerability?  

### How to debug
Clone this repository, and run `docker compose up` in this directory.  
Then, you can access the challenge at `http://localhost:18080/`.