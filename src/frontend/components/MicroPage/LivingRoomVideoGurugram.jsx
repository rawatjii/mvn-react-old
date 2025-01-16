import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import PeacockLoader from "../../../common/Loader/micro/peacockLoader/Index";
import ScrollDown from "../../../common/scrollDown/Index";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = ({ data, onLoadComplete }) => {
  const canvasRef = useRef(null); // Ref for the canvas
  const sectionRef = useRef(null);
  const [images, setImages] = useState([]); // Array to store loaded images
  const [loading, setLoading] = useState(true); // Loader state
  const totalFramesMobile = 126; // Total frames for mobile

  const { title, desc } = data.living_room_video;

  // Function to draw a frame on the canvas
  const drawFrame = (frameIndex, ctx, canvas, images) => {
    if (!images || images.length === 0) return;

    const img = images[frameIndex];
    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imageAspectRatio = img.width / img.height;
    const canvasAspectRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;

    if (canvasAspectRatio > imageAspectRatio) {
      drawHeight = canvasWidth / imageAspectRatio;
    } else {
      drawWidth = canvasHeight * imageAspectRatio;
    }

    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Load images for mobile
  useEffect(() => {
    const totalFrames = totalFramesMobile;
    const imagePath = "assets/videos/living-room/desktop/";

    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = `${imagePath}${i}.webp`;

      img.onload = () => {
        loadedCount++;
        loadedImages.push(img);

        if (loadedCount === 1) {
          // Draw the first image as soon as it's loaded
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext("2d");
            const aspectRatio = img.width / img.height;
            canvas.width = window.innerWidth;
            canvas.height = canvas.width / aspectRatio;
            drawFrame(0, ctx, canvas, [img]); // Draw the first image
          }
        }

        if (loadedCount === totalFrames) {
          setImages(loadedImages);
          setLoading(false);
          onLoadComplete();
        }
      };

      img.onerror = () => {
        console.error(`Failed to load image: ${imagePath}${i}.webp`);
      };
    }
  }, [onLoadComplete]);

  // GSAP ScrollTrigger Animation
  useEffect(() => {
    if (images.length === 0 || loading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const totalFrames = totalFramesMobile;

    const scrollAnimation = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 4}`,
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        drawFrame(frameIndex, ctx, canvas, images);
      },
      onLeaveBack: () => {
        drawFrame(0, ctx, canvas, images);
      },
      onLeave: () => {
        drawFrame(totalFrames - 1, ctx, canvas, images);
      },
    });

    return () => {
      scrollAnimation.kill();
    };
  }, [images, loading]);

  // Resize canvas dynamically
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current && images.length > 0) {
        const canvas = canvasRef.current;
        const img = images[0];
        const aspectRatio = img.width / img.height;

        canvas.width = window.innerWidth;
        canvas.height = canvas.width / aspectRatio;

        const ctx = canvas.getContext("2d");
        drawFrame(0, ctx, canvas, images); // Redraw the first frame on resize
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [images]);

  return (
    <div
      className="section peacock_section living_room_section pb-0"
      ref={sectionRef}
      id="peacockSection"
    >
      {loading && <PeacockLoader />}

      <div className="frames_content">
        <div className="image_col position-relative">
          <canvas ref={canvasRef} style={{ display: "block", margin: "auto" }} />
        </div>
        <ScrollDown className="color-black" />
      </div>

      <Container>
        <div className="about">
          <CustomCard title={title} desc={desc} className="px_sm_0 pb-0" />
        </div>
      </Container>
    </div>
  );
};

export default LivingRoomVideoGurugram;
