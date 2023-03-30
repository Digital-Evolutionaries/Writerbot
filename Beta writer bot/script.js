// Function to generate a random writing prompt from the prompts array
function generatePrompt() {
    const prompts = [
      "Write a short story about a time traveler who meets their past self.",
      "Describe a character who has the ability to speak with animals.",
      "Write a poem about a sunrise over the ocean.",
      "Write a monologue from the perspective of a tree.",
      "Describe a futuristic city where humans and robots coexist.",
      "Write a story about a character who discovers a hidden magical world.",
      "Write a letter to your future self.",
      "Describe a world where music doesn't exist.",
      "Write a scene that takes place at a carnival.",
      "Write a story that starts and ends with the same sentence, but has a different meaning the second time around."
    ];
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const prompt = prompts[randomIndex];
    return prompt;
  }
  
  // Function to display the writing prompt on the page
  function displayPrompt() {
    const prompt = generatePrompt();
    const promptElement = document.getElementById("prompt");
    promptElement.textContent = prompt;
  }
  
  // Call displayPrompt when the page loads
  displayPrompt();
  
  // Add an event listener to the "Generate New Prompt" button
  const generateButton = document.getElementById("generate-button");
  generateButton.addEventListener("click", displayPrompt);
  