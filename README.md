# YuCCA Lab Website

This is the official website for Yu's Cognitive Computing and Automation Lab at the University of California, Merced.

## Adding Your Profile to the Members Page

Current and prospective lab members can add their profiles to the website by following these steps:

### 1. Fork the Lab Website GitHub Repository

Fork this repository to your own GitHub account by clicking the "Fork" button at the top right of this page.

### 2. Create a New Folder in the `members` Directory

Create a new folder with your name (e.g., `members/yourname/`) to store your profile information.

### 3. Add Your Profile Photo and Personal Webpage Files

In your folder under the `members` directory, add the following:

- **Profile photo** (required): Add your profile photo as `images/photo.jpg`. Please use a professional headshot with reasonable dimensions (recommended: 400x400px or similar).
- **Personal webpage** (optional): You may optionally create an `index.html` file for your personal webpage. If you choose to include a personal webpage, please keep file sizes reasonable and avoid uploading very large files to the repository.

### 4. Add a New Entry in `members.html`

Edit the `members.html` file to add your profile information. Use the appropriate template below based on your role:

#### Template for Ph.D. Students

Add this code under the `<h3>PhD Researchers</h3>` section, inside the `<div class="members-grid-small">` container:

```html
<div class="member-card-small">
    <div class="member-img">
        <img src="members/yourname/images/photo.jpg" alt="Your Name">
    </div>
    <div class="member-content">
        <div class="member-name"><a href="members/yourname/index.html">Your Name</a></div>
        <div class="member-title">Ph.D. Student, Dept. of EE</div>
        <div class="member-start-time">Started in Fall 2025</div>
        <div class="member-education">
            M.S. Your University<br>
            B.S. Your University
        </div>
        <div class="member-contact">
            Email: <a href="mailto:youremail@ucmerced.edu">youremail@ucmerced.edu</a>
        </div>
    </div>
</div>
```

**Notes:**
- If you don't have a personal webpage, change `<div class="member-name"><a href="members/yourname/index.html">Your Name</a></div>` to: `<div class="member-name">Your Name</div>`
- Update the start time (e.g., "Fall 2025", "Spring 2024") to reflect when you joined the lab
- Use abbreviated department names: "Dept. of EE" for Electrical Engineering, "Dept. of CSE" for Computer Science and Engineering, etc.

#### Template for Master's Students

Add this code under the `<h3>Master's Researchers</h3>` section, inside the `<div class="members-grid-small">` container:

```html
<div class="member-card-small">
    <div class="member-img">
        <img src="members/yourname/images/photo.jpg" alt="Your Name">
    </div>
    <div class="member-content">
        <div class="member-name"><a href="members/yourname/index.html">Your Name</a></div>
        <div class="member-title">M.S. Student, Dept. of CSE</div>
        <div class="member-start-time">Started in Fall 2025</div>
        <div class="member-education">
            B.S. Your University
        </div>
        <div class="member-contact">
            Email: <a href="mailto:youremail@ucmerced.edu">youremail@ucmerced.edu</a>
        </div>
    </div>
</div>
```

**Notes:**
- If you don't have a personal webpage, change `<div class="member-name"><a href="members/yourname/index.html">Your Name</a></div>` to: `<div class="member-name">Your Name</div>`
- Update the start time (e.g., "Fall 2025", "Spring 2024") to reflect when you joined the lab
- Use abbreviated department names: "Dept. of EE" for Electrical Engineering, "Dept. of CSE" for Computer Science and Engineering, etc.

#### Template for Undergraduate Researchers

Add this code under the `<h3>Undergraduate Researchers</h3>` section, inside the `<div class="members-grid-small">` container:

```html
<div class="member-card-small">
    <div class="member-img">
        <img src="members/yourname/images/photo.jpg" alt="Your Name">
    </div>
    <div class="member-content">
        <div class="member-name"><a href="members/yourname/index.html">Your Name</a></div>
        <div class="member-title">Undergrad Student, Dept. of EE</div>
        <div class="member-start-time">Started in Fall 2025</div>
        <div class="member-contact">
            Email: <a href="mailto:youremail@ucmerced.edu">youremail@ucmerced.edu</a>
        </div>
    </div>
</div>
```

**Notes:**
- If you don't have a personal webpage, change `<div class="member-name"><a href="members/yourname/index.html">Your Name</a></div>` to: `<div class="member-name">Your Name</div>`
- Update the start time (e.g., "Fall 2025", "Spring 2024") to reflect when you joined the lab
- Use abbreviated department names: "Dept. of EE" for Electrical Engineering, "Dept. of CSE" for Computer Science and Engineering, etc.

### 5. Submit a Pull Request

Once you've made your changes:

1. Commit your changes to your forked repository
2. Create a pull request to the main repository
3. Assign the PI (**Orienfish**) as the reviewer
4. Wait for approval

Once the pull request is approved, the PI will update the website on the server, and your profile will be live!

## Questions?

If you have any questions about adding your profile, please contact the lab PI at [xiaofanyu@ucmerced.edu](mailto:xiaofanyu@ucmerced.edu).
