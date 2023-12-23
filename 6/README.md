# Challenge 6: Query the J-thing

| Challenge ID | 6 |
| :---- | :---- | 
| **Title** | Query the J-thing |
| **Difficulty** | Normal |
| **Answer format** | Payload that executes `solve()` function on `localhost:18080` when opened. (e.g., `http://localhost:18080/?id=1`) |
| **Solvers** | [Solvers list](https://github.com/ryotak-ctf/scoreboard/tree/main/solvers/6)  |

## Description
I found a website that seems pretty old and legacy. However, after some investigation, I found no vulnerabilities in that website.  
Do you think that there is a vulnerability in this website?  

**Note:** This challenge is expected to be solved in Firefox.  

### How to debug
Clone this repository, and run `docker compose up` in this directory.  
Then, you can access the challenge at `http://localhost:18080/`.

## Hints

<details>
<summary>Hint 1</summary>

jQuery is an old library, and there are some good-old features.
<details>
<summary>Hint 2</summary>

JSON is good, but how about adding one more character?
<details>
<summary>Hint 3</summary>

I heard that you need a call back :J
</details>
</details>
</details>