"use strict";
const blogs = [
    {
        id: 1,
        title: "Getting Started with JavaScript",
        description: "Learn the fundamentals of JavaScript and how to build interactive web pages.",
        content: "",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85",
        date: "May 1, 2023",
        views: "1.5K",
        comments: 12,
        category: "JavaScript",
        tags: []
    },
    {
        id: 2,
        title: "Understanding Array Methods",
        description: "A simple guide to map, filter, and find in JavaScript.",
        content: "",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
        date: "May 3, 2023",
        views: "980",
        comments: 8,
        category: "JavaScript",
        tags: []
    },
    {
        id: 3,
        title: "Async Await Made Simple",
        description: "Understanding asynchronous JavaScript without confusion.",
        content: "",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85",
        date: "May 8, 2023",
        views: "745",
        comments: 6,
        category: "JavaScript",
        tags: []
    },
    {
        id: 4,
        title: "CSS Grid vs Flexbox",
        description: "Know when to use CSS Grid and when Flexbox is the better choice.",
        content: "",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
        date: "May 10, 2023",
        views: "1.2K",
        comments: 15,
        category: "Web Development",
        tags: []
    },
    {
        id: 5,
        title: "Building Responsive Websites",
        description: "Make your website look clean on phones, tablets, and laptops.",
        content: "",
        image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=900&q=85",
        date: "May 14, 2023",
        views: "890",
        comments: 9,
        category: "Web Development",
        tags: []
    },
    {
        id: 6,
        title: "My First TypeScript Project",
        description: "Lessons I learned while building my first project with TypeScript.",
        content: "",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
        date: "May 18, 2023",
        views: "875",
        comments: 8,
        category: "Web Development",
        tags: []
    },
    {
        id: 7,
        title: "How I Started Learning Code",
        description: "My first experience with coding and why I decided to continue.",
        content: "",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
        date: "May 20, 2023",
        views: "642",
        comments: 7,
        category: "Coding Journey",
        tags: []
    },
    {
        id: 8,
        title: "Lessons From My First Project",
        description: "The mistakes, wins, and lessons from building a project alone.",
        content: "",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=85",
        date: "May 24, 2023",
        views: "720",
        comments: 10,
        category: "Coding Journey",
        tags: []
    },
    {
        id: 9,
        title: "Staying Consistent as a Developer",
        description: "Small habits that help me continue learning every day.",
        content: "",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
        date: "May 28, 2023",
        views: "530",
        comments: 5,
        category: "Coding Journey",
        tags: []
    },
    {
        id: 10,
        title: "When It Works on the First Try",
        description: "That rare developer moment when your code works immediately.",
        content: "",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=85",
        date: "June 1, 2023",
        views: "2.1K",
        comments: 25,
        category: "Tech & Memes",
        tags: []
    },
    {
        id: 11,
        title: "Debugging at 2 AM",
        description: "Every developer knows this particular kind of pain.",
        content: "",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85",
        date: "June 4, 2023",
        views: "1.8K",
        comments: 18,
        category: "Tech & Memes",
        tags: []
    },
    {
        id: 12,
        title: "Things Only Developers Understand",
        description: "A few funny facts about the life of a developer.",
        content: "",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
        date: "June 8, 2023",
        views: "1.4K",
        comments: 14,
        category: "Tech & Memes",
        tags: []
    },
];
const blogList = document.getElementById("blog-list");
if (!blogList) {
    throw new Error("Blog list was not found.");
}
function renderPosts(posts) {
    if (!blogList) {
        return;
    }
    blogList.innerHTML = posts.map((blog) => {
        return `
        <article class="blog-card" data-id="${blog.id}">
          <img src="${blog.image}" alt="${blog.title}" class="blog-image" />

          <div class="blog-card-content">
            <h3>${blog.title}</h3>
            <p class="blog-description">${blog.description}</p>

            <div class="blog-card-footer">
              <span><i class="fa-regular fa-calendar"></i> ${blog.date}</span>
              <span><i class="fa-regular fa-eye"></i> ${blog.views}</span>
              <span><i class="fa-regular fa-comment"></i> ${blog.comments}</span>

              <div class="card-actions">
                <button type="button" title="Edit post">
                  <i class="fa-solid fa-pen"></i>
                </button>

                <button type="button" title="Delete post">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
        .join("");
}
blogList.addEventListener("click", (event) => {
    const target = event.target;
    const deleteButton = target.closest("[title='Delete post']");
    if (deleteButton) {
        return;
    }
    const editButton = target.closest("[title='Edit post']");
    if (editButton) {
        return;
    }
    const card = target.closest(".blog-card");
    if (!card)
        return;
    const blogId = Number(card.dataset.id);
    const selectedBlog = blogs.find((blog) => blog.id === blogId);
    if (!selectedBlog)
        return;
    if (homeView && postView) {
        homeView.style.display = "none";
        postView.style.display = "block";
        const postViewTitle = document.getElementById("post-view-title");
        const postViewImage = document.getElementById("post-view-image");
        const postViewDate = document.getElementById("post-view-date");
        const postViewViews = document.getElementById("post-view-views");
        const postViewContent = document.getElementById("post-view-content");
        if (postViewTitle) {
            postViewTitle.textContent = selectedBlog.title;
        }
        if (postViewImage) {
            postViewImage.src = selectedBlog.image;
            postViewImage.alt = selectedBlog.title;
        }
        if (postViewDate) {
            postViewDate.textContent = selectedBlog.date;
        }
        if (postViewViews) {
            postViewViews.textContent = selectedBlog.views;
        }
        if (postViewContent) {
            postViewContent.textContent = selectedBlog.content || selectedBlog.description;
        }
    }
});
blogList.addEventListener("click", (event) => {
    const target = event.target;
    const deleteButton = target.closest("[title='Delete post']");
    if (!deleteButton) {
        return;
    }
    const card = deleteButton.closest(".blog-card");
    if (!card) {
        return;
    }
    const blogId = Number(card.dataset.id);
    const blogToDelete = blogs.find((blog) => blog.id === blogId);
    if (!blogToDelete) {
        return;
    }
    const confirmed = confirm(`Delete "${blogToDelete.title}"? This cannot be undone.`);
    if (!confirmed) {
        return;
    }
    const index = blogs.findIndex((blog) => blog.id === blogId);
    blogs.splice(index, 1);
    showSelectedPosts();
});
blogList.addEventListener("click", (event) => {
    const target = event.target;
    const editButton = target.closest("[title='Edit post']");
    if (!editButton) {
        return;
    }
    const card = editButton.closest(".blog-card");
    if (!card) {
        return;
    }
    const blogId = Number(card.dataset.id);
    const blogToEdit = blogs.find((blog) => blog.id === blogId);
    if (!blogToEdit) {
        return;
    }
    currentPostId = blogToEdit.id;
    if (titleInput)
        titleInput.value = blogToEdit.title;
    if (descriptionInput)
        descriptionInput.value = blogToEdit.description;
    if (contentInput)
        contentInput.value = blogToEdit.content;
    if (categorySelect)
        categorySelect.value = blogToEdit.category;
    if (tagsInput)
        tagsInput.value = blogToEdit.tags.join(", ");
    selectedImageDataUrl = blogToEdit.image;
    if (previewImage)
        previewImage.src = blogToEdit.image;
    if (previewTitle)
        previewTitle.textContent = blogToEdit.title;
    if (previewDescription)
        previewDescription.textContent = blogToEdit.description;
    showCreateView();
});
const backToHomeLink = document.getElementById("back-to-home-link");
if (backToHomeLink) {
    backToHomeLink.addEventListener("click", (event) => {
        event.preventDefault();
        showHomeView();
    });
}
let activeCategory = "All";
function showSelectedPosts() {
    const postsToShow = activeCategory === "All"
        ? blogs
        : blogs.filter((blog) => blog.category === activeCategory);
    renderPosts(postsToShow);
}
const filterButtons = document.querySelectorAll(".filter-button");
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove("active");
        });
        button.classList.add("active");
        showSelectedPosts();
    });
});
showSelectedPosts();
const homeView = document.getElementById("home-view");
const createView = document.getElementById("create-view");
const postView = document.getElementById("post-view");
const homeLink = document.getElementById("home-link");
const createLink = document.getElementById("create-link");
const createPostButton = document.getElementById("create-post-button");
function setActiveNav(activeLink) {
    homeLink?.classList.remove("active");
    createLink?.classList.remove("active");
    activeLink.classList.add("active");
}
function showCreateView() {
    if (!homeView || !createView) {
        return;
    }
    homeView.style.display = "none";
    createView.style.display = "block";
    if (createLink) {
        setActiveNav(createLink);
    }
}
function showHomeView() {
    if (!homeView || !createView || !postView) {
        return;
    }
    homeView.style.display = "block";
    createView.style.display = "none";
    postView.style.display = "none";
    if (homeLink) {
        setActiveNav(homeLink);
    }
}
if (createLink) {
    createLink.addEventListener("click", (event) => {
        event.preventDefault();
        showCreateView();
    });
}
if (homeLink) {
    homeLink.addEventListener("click", (event) => {
        event.preventDefault();
        showHomeView();
    });
}
if (createPostButton) {
    createPostButton.addEventListener("click", () => {
        showCreateView();
    });
}
let currentPostId = null;
const postForm = document.getElementById("post-form");
const titleInput = document.getElementById("post-title");
const descriptionInput = document.getElementById("post-description");
const contentInput = document.getElementById("post-content");
const imageInput = document.getElementById("post-image");
const categorySelect = document.getElementById("post-category");
const tagsInput = document.getElementById("post-tags");
const cancelPostButton = document.getElementById("cancel-post-button");
const previewImage = document.getElementById("preview-image");
const previewTitle = document.getElementById("preview-title");
const previewDescription = document.getElementById("preview-description");
const DEFAULT_PREVIEW_IMAGE = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85";
let selectedImageDataUrl = DEFAULT_PREVIEW_IMAGE;
function formatToday() {
    return new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}
// I USE AI FOR THIS BUT UNDERSTAND
function updateLivePreview() {
    if (previewTitle) {
        previewTitle.textContent = titleInput?.value.trim() || "Your Blog Title";
    }
    if (previewDescription) {
        previewDescription.textContent =
            descriptionInput?.value.trim() || "Your description will appear here...";
    }
}
titleInput?.addEventListener("input", updateLivePreview);
descriptionInput?.addEventListener("input", updateLivePreview);
imageInput?.addEventListener("change", () => {
    const file = imageInput.files?.[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        selectedImageDataUrl = reader.result;
        if (previewImage) {
            previewImage.src = selectedImageDataUrl;
        }
    };
    reader.readAsDataURL(file);
});
function resetPostForm() {
    postForm?.reset();
    selectedImageDataUrl = DEFAULT_PREVIEW_IMAGE;
    if (previewImage) {
        previewImage.src = DEFAULT_PREVIEW_IMAGE;
    }
    if (previewTitle) {
        previewTitle.textContent = "Your Blog Title";
    }
    if (previewDescription) {
        previewDescription.textContent = "Your description will appear here...";
    }
}
function getNextId() {
    return blogs.length ? Math.max(...blogs.map((blog) => blog.id)) + 1 : 1;
}
if (postForm) {
    postForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = titleInput?.value.trim() ?? "";
        const description = descriptionInput?.value.trim() ?? "";
        const content = contentInput?.value.trim() ?? "";
        const category = (categorySelect?.value ?? "");
        if (!title || !description || !content || !category) {
            return;
        }
        const tags = (tagsInput?.value ?? "")
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0);
        if (currentPostId !== null) {
            const blogToUpdate = blogs.find((blog) => blog.id === currentPostId);
            if (blogToUpdate) {
                blogToUpdate.title = title;
                blogToUpdate.description = description;
                blogToUpdate.content = content;
                blogToUpdate.image = selectedImageDataUrl;
                blogToUpdate.category = category;
                blogToUpdate.tags = tags;
            }
            currentPostId = null;
        }
        else {
            const newBlog = {
                id: getNextId(),
                title,
                description,
                content,
                image: selectedImageDataUrl,
                date: formatToday(),
                views: "0",
                comments: 0,
                category: category,
                tags,
            };
            blogs.unshift(newBlog);
        }
        resetPostForm();
        activeCategory = "All";
        filterButtons.forEach((filterButton) => filterButton.classList.remove("active"));
        filterButtons[0]?.classList.add("active");
        showSelectedPosts();
        showHomeView();
    });
}
if (cancelPostButton) {
    cancelPostButton.addEventListener("click", () => {
        resetPostForm();
        showHomeView();
    });
}
