"use client";

import { useEffect } from "react";

const CursorBall = () => {
  useEffect(() => {
    // Check if the device is mobile
    const isMobile = window.innerWidth <= 768; // You can adjust this based on your mobile breakpoint

    // Only proceed with the cursor ball effect on non-mobile devices
    if (isMobile) {
      return; // Do nothing if it's a mobile device
    }

    // Create a ball element
    const cursorBall = document.createElement("div");
    cursorBall.style.position = "absolute";
    cursorBall.style.width = "20px";
    cursorBall.style.height = "20px";
    cursorBall.style.borderRadius = "50%";
    cursorBall.style.backgroundColor = "rgba(63, 115, 218, 0.5)"; // Semi-transparent color
    cursorBall.style.pointerEvents = "none"; // Prevent the ball from interacting with the page
    cursorBall.style.transition = "transform 0.1s ease"; // Smooth transition
    cursorBall.style.zIndex = "9999"; // Make sure it's above other elements
    document.body.appendChild(cursorBall);

    // Create canvas element for drawing
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none"; // Prevent the canvas from blocking interactions
    canvas.style.zIndex = "9998"; // Put canvas behind the cursor ball
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    // Resize the canvas to cover the entire window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    let isDrawing = false;

    // Draw on the canvas as the cursor moves
    const draw = (event) => {
      if (isDrawing) {
        // Start a new path for each drawing
        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(63, 115, 218, 0.5)";
        ctx.fill();
      }
    };

    // Track mouse movement and update position of the ball
    const updateCursorPosition = (event) => {
      cursorBall.style.left = `${event.clientX - cursorBall.offsetWidth / 2}px`;
      cursorBall.style.top = `${event.clientY - cursorBall.offsetHeight / 2}px`;

      // Start drawing when mouse is down (check if left mouse button is held)
      if (event.buttons === 1) {
        // Left mouse button is held down
        if (!isDrawing) {
          isDrawing = true; // Start drawing
          document.body.style.userSelect = "none"; // Disable text selection while drawing
        }
        draw(event); // Continue drawing
      } else {
        isDrawing = false; // Stop drawing when mouse button is released
        document.body.style.userSelect = "auto"; // Re-enable text selection after drawing stops
      }
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", updateCursorPosition);

    // Hide the cursor ball when hovering over a link
    const handleLinkHover = (event) => {
      if (event.target.tagName === "A") {
        cursorBall.style.display = "none"; // Hide the cursor ball
      }
    };

    const handleLinkLeave = () => {
      cursorBall.style.display = "block"; // Show the cursor ball again
    };

    // Attach event listeners to hide/show the cursor ball when hovering over links
    document.body.addEventListener("mouseover", handleLinkHover);
    document.body.addEventListener("mouseout", handleLinkLeave);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.body.removeChild(cursorBall);
      document.body.removeChild(canvas);
      window.removeEventListener("resize", resizeCanvas);
      document.body.removeEventListener("mouseover", handleLinkHover);
      document.body.removeEventListener("mouseout", handleLinkLeave);
      document.body.style.userSelect = "auto"; // Ensure text selection is re-enabled on component unmount
    };
  }, []); // The effect runs only once on mount, not every time the component updates

  return null; // This component doesn't render any DOM elements, it just controls the cursor ball.
};

export default CursorBall;
