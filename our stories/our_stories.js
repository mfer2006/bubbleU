
const SUPABASE_URL = "https://cwhiuctcxcolqagndkxx.supabase.co";
const SUPABASE_KEY = "sb_publishable_hEcpoUcPRIpTPPd5uHu7yA_qiuWxu9d";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const storyForm = document.querySelector("#storyForm");
const storyInput = document.querySelector("#story");
const storiesContainer = document.querySelector("#stories");
const thankYouMessage = document.querySelector("#thankYouMessage");

async function loadStories() {
  const { data, error } = await supabaseClient
    .from("stories")
    .select("story, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading stories:", error);
    return;
  }

  storiesContainer.innerHTML = "";

  data.forEach(function (item) {
    const newStory = document.createElement("p");
    newStory.textContent = item.story;
    storiesContainer.appendChild(newStory);
  });
}

storyForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const storyText = storyInput.value.trim();

  if (storyText === "") {
    return;
  }

  const { error } = await supabaseClient
    .from("stories")
    .insert([
      {
        story: storyText
      }
    ]);

  if (error) {
    console.error("Error submitting story:", error);
    thankYouMessage.innerText =
      "Something went wrong. Please try again.";
    return;
  }

  thankYouMessage.innerText =
    "Thank you for sharing your story.";

  storyForm.reset();

  loadStories();
});

loadStories();

