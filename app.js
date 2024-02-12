const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

 // Function to handle the download
    // function downloadResume() {
    //     // Path to your resume file
    //     let resumeUrl ='C:\Users\Aniket yadav\OneDrive\Desktop\porfolio\Resume.pdf';
        
    //     // Create a link element
    //     let downloadLink = document.createElement('a');
    //     downloadLink.href = resumeUrl;
        
    //     // Set the download attribute to specify filename
    //     downloadLink.download = 'your_resume.pdf';
        
    //     // Append the link to the body
    //     document.body.appendChild(downloadLink);
        
    //     // Trigger the click event
    //     downloadLink.click();
        
    //     // Clean up
    //     // document.body.removeChild(downloadLink);
    // }
    
    // // Add event listener to button
    // document.querySelector('.about.col-right.downloadButton').addEventListener('click', downloadResume);