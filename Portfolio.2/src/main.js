const THREE = globalThis.THREE;

const React = globalThis.React;
const { useEffect, useMemo, useRef, useState } = React;
const { createRoot } = globalThis.ReactDOM;
const h = React.createElement;
const portraitPath = "./assets/vishv-portrait.png";
const resumePath = "./assets/Vishv_Ranjan_DevOps_CV.pdf";

function createIcon(nodes) {
  return function LocalIcon({ size = 24, strokeWidth = 2, ...props } = {}) {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
      },
      nodes.map(([tag, attrs], index) => h(tag, { key: index, ...attrs })),
    );
  };
}

const Terminal = createIcon([
  ["polyline", { points: "4 17 10 11 4 5" }],
  ["line", { x1: "12", y1: "19", x2: "20", y2: "19" }],
]);
const Code2 = createIcon([
  ["path", { d: "m16 18 6-6-6-6" }],
  ["path", { d: "m8 6-6 6 6 6" }],
  ["path", { d: "m14.5 4-5 16" }],
]);
const Cpu = createIcon([
  ["rect", { x: "7", y: "7", width: "10", height: "10", rx: "2" }],
  ["rect", { x: "10", y: "10", width: "4", height: "4", rx: "1" }],
  ["path", { d: "M4 10h3M4 14h3M17 10h3M17 14h3M10 4v3M14 4v3M10 17v3M14 17v3" }],
]);
const Sparkles = createIcon([
  ["path", { d: "m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" }],
  ["path", { d: "m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z" }],
  ["path", { d: "m5 16 .6 1.7L7 18.3l-1.4.6L5 20.5l-.6-1.6L3 18.3l1.4-.6Z" }],
]);
const Download = createIcon([
  ["path", { d: "M12 3v12" }],
  ["path", { d: "m7 10 5 5 5-5" }],
  ["path", { d: "M5 21h14" }],
]);
const Network = createIcon([
  ["rect", { x: "16", y: "16", width: "5", height: "5", rx: "1" }],
  ["rect", { x: "3", y: "16", width: "5", height: "5", rx: "1" }],
  ["rect", { x: "9.5", y: "3", width: "5", height: "5", rx: "1" }],
  ["path", { d: "M12 8v4M6 16l6-4 6 4" }],
]);
const Github = createIcon([
  ["path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.4c3.3-.4 6.7-1.6 6.7-7.2A5.6 5.6 0 0 0 19.2 3a5.2 5.2 0 0 0-.1-4s-1.3-.4-4.1 1.6a14 14 0 0 0-7.4 0C4.8-1.4 3.5-1 3.5-1a5.2 5.2 0 0 0-.1 4A5.6 5.6 0 0 0 2 7.4c0 5.6 3.4 6.8 6.7 7.2A4.8 4.8 0 0 0 7.7 18v4" }],
  ["path", { d: "M9 18c-4.5 2-5-2-7-2" }],
]);
const Mail = createIcon([
  ["rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }],
  ["path", { d: "m3 7 9 6 9-6" }],
]);
const Phone = createIcon([
  ["path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.7 2.5a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.6 2.5.7a2 2 0 0 1 1.7 2Z" }],
]);
const Linkedin = createIcon([
  ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" }],
  ["rect", { x: "2", y: "9", width: "4", height: "12" }],
  ["circle", { cx: "4", cy: "4", r: "2" }],
]);
const Instagram = createIcon([
  ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }],
  ["path", { d: "M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4Z" }],
  ["line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }],
]);
const ExternalLink = createIcon([
  ["path", { d: "M15 3h6v6" }],
  ["path", { d: "M10 14 21 3" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }],
]);

const links = {
  email: "mailto:vishvranjan999@gmail.com",
  phone: "tel:+916396617946",
  instagram: "https://www.instagram.com/vishu_rk.18?igsh=MTJuMWMyZnB6M2hvcQ==",
  linkedin:
    "https://www.linkedin.com/in/vishv-ranjan-8658a0401?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/VishuK-cyber",
};

const skillGroups = [
  {
    icon: Sparkles,
    title: "AI & Automation",
    text: "Building AI-powered bots, prompt engineering, integrating large language models, and automating workflows for personal and practical use.",
    chips: ["Python", "OpenAI", "Automation", "Trading Bots", "APIs"],
  },
  {
    icon: Code2,
    title: "Frontend Development",
    text: "Creating responsive, interactive web interfaces using HTML, CSS, JavaScript ES6+, React, and modern UI/UX principles.",
    chips: ["React", "JavaScript", "HTML5", "CSS3", "UI/UX"],
  },
  {
    icon: Terminal,
    title: "Creative Designing",
    text: "Translating concepts into cinematic visual experiences. Proficient in design thinking, digital art creation, and creative problem solving.",
    chips: ["Canva", "Design Thinking", "2D Animation", "Visuals", "Editing"],
  },
  {
    icon: Cpu,
    title: "Hardware & IoT",
    text: "Arduino, microcontrollers, circuit logic, motor drivers, sensors, and hardware/software integration for robotics builds.",
    chips: ["Arduino", "L298", "BMS", "Sensors", "Robotics"],
  },
];

const projects = [
  {
    title: "AI-Powered Trading Bot",
    text: "Developed a custom trading bot using Python that leverages AI to analyze market data and automate personal trading strategies.",
    tags: ["Python", "AI", "Automation", "Finance"],
  },
  {
    title: "Interactive Web Interfaces",
    text: "Built personalized website UIs with responsive layouts, dynamic text fading loops, and strong DOM manipulation.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "Bluetooth Serving Robot",
    text: "Engineered an Arduino-based serving robot that connected hardware logic with software control and real component debugging.",
    tags: ["Arduino", "Motors", "Sensors", "Control"],
  },
  {
    title: "AI Workshops & Hackathons",
    text: "Hosted AI-related workshops and hackathons as part of the Google Campus Program, bringing peers into practical technology.",
    tags: ["Leadership", "AI", "Workshops", "Campus"],
  },
];

const timeline = [
  {
    year: "2024 - Present",
    title: "Bachelor of Computer Applications",
    text: "ITM College, Dehradun. Coursework includes Computer Networks, Operating Systems, Graph Theory, and Software Engineering.",
  },
  {
    year: "2025",
    title: "Google Student Ambassador",
    text: "Represented the Google Campus Program with AI workshops, hackathons, teamwork, leadership, and campus-level technology advocacy.",
  },
  {
    year: "Expected 2027",
    title: "Frontend & AI Direction",
    text: "Focused on building practical web interfaces, AI-assisted automation, creative design, and real-world system experience.",
  },
];

function Icon(IconComponent, props = {}) {
  return h(IconComponent, { size: props.size || 18, strokeWidth: props.strokeWidth || 1.8, ...props });
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return progress;
}

function SceneCanvas({ progress }) {
  const canvasRef = useRef(null);
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.038);

    const camera = new THREE.PerspectiveCamera(47, 1, 0.1, 140);
    camera.position.set(0, 0.4, 16);

    const world = new THREE.Group();
    scene.add(world);

    const key = new THREE.DirectionalLight(0xf7f2e8, 3.2);
    key.position.set(6, 7, 8);
    scene.add(key);

    const cyan = new THREE.PointLight(0x58f7ff, 18, 34);
    cyan.position.set(-5, 1.5, 6);
    scene.add(cyan);

    const amber = new THREE.PointLight(0xffbe55, 12, 30);
    amber.position.set(5, -3, 2);
    scene.add(amber);

    const fill = new THREE.HemisphereLight(0x9c7dff, 0x050505, 1.2);
    scene.add(fill);

    const core = createDevOpsCore();
    core.position.set(3.9, 0.2, -1.2);
    world.add(core);

    const pipeline = createPipelineModel();
    pipeline.position.set(-2.8, -1.6, -0.5);
    pipeline.rotation.y = -0.38;
    world.add(pipeline);

    const robot = createRobotArm();
    robot.position.set(2.1, -3.2, -1.6);
    robot.rotation.y = -0.72;
    world.add(robot);

    const server = createServerStack();
    server.position.set(-4.2, 1.7, -1.4);
    server.rotation.y = 0.42;
    world.add(server);

    const ribbon = createCircuitRibbon();
    world.add(ribbon);

    const particles = createParticleField();
    scene.add(particles);

    const dataPlane = createDataPlane();
    dataPlane.position.set(-0.6, 0.2, -7.8);
    scene.add(dataPlane);

    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };
    let raf = 0;

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    function onPointerMove(event) {
      targetMouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    }

    function tick(timeMs) {
      const time = timeMs * 0.001;
      const p = progressRef.current;
      mouse.x += (targetMouse.x - mouse.x) * 0.045;
      mouse.y += (targetMouse.y - mouse.y) * 0.045;

      world.rotation.y = -0.24 + p * 1.55 + mouse.x * 0.12;
      world.rotation.x = -0.08 + p * 0.34 - mouse.y * 0.08;
      world.position.y = p * -1.4;

      core.rotation.y = time * 0.36 + p * 2.6;
      core.rotation.x = Math.sin(time * 0.6) * 0.1;
      pipeline.children.forEach((child, index) => {
        child.rotation.z += 0.002 * (index + 1);
      });
      robot.children[1].rotation.z = Math.sin(time * 1.2) * 0.14;
      server.rotation.y = 0.42 + Math.sin(time * 0.4) * 0.08;
      ribbon.children.forEach((child, index) => {
        child.material.opacity = 0.26 + Math.sin(time * 1.8 + index) * 0.13;
      });
      particles.rotation.y = time * 0.025 + p * 0.22;
      particles.rotation.x = Math.sin(time * 0.12) * 0.05;
      dataPlane.material.opacity = 0.09 + Math.sin(time * 0.7) * 0.025;

      camera.position.x = mouse.x * 0.78;
      camera.position.y = 0.34 - p * 1.2 - mouse.y * 0.42;
      camera.position.z = 16 - p * 4.1;
      camera.lookAt(0.35, -0.25 - p * 0.5, -1);

      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(raf);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (material.map) material.map.dispose();
            material.dispose();
          });
        }
      });
      renderer.dispose();
    };
  }, []);

  return h("canvas", { ref: canvasRef, className: "scene-canvas", "aria-hidden": "true" });
}

function createDevOpsCore() {
  const group = new THREE.Group();
  const metal = new THREE.MeshPhysicalMaterial({
    color: 0xf7f2e8,
    metalness: 0.72,
    roughness: 0.25,
    emissive: 0x132f32,
    clearcoat: 0.82,
    clearcoatRoughness: 0.18,
  });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x58f7ff,
    transparent: true,
    opacity: 0.62,
    emissive: 0x0b8f98,
    emissiveIntensity: 0.65,
    roughness: 0.16,
    metalness: 0.22,
    transmission: 0.22,
  });

  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.95, 0.18, 170, 16, 2, 5), metal);
  group.add(knot);

  const ringMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x58f7ff, emissive: 0x0d8c91, emissiveIntensity: 0.55 }),
    new THREE.MeshStandardMaterial({ color: 0xffbe55, emissive: 0x8f4e0e, emissiveIntensity: 0.42 }),
    new THREE.MeshStandardMaterial({ color: 0xff6d9f, emissive: 0x8b143e, emissiveIntensity: 0.34 }),
  ];

  for (let i = 0; i < 3; i += 1) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.65 + i * 0.46, 0.018, 12, 150), ringMaterials[i]);
    ring.rotation.x = Math.PI / 2 + i * 0.42;
    ring.rotation.y = i * 0.76;
    group.add(ring);
  }

  for (let i = 0; i < 12; i += 1) {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 2.28 + (i % 3) * 0.26;
    const node = new THREE.Mesh(new THREE.IcosahedronGeometry(0.09, 1), glass);
    node.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.7) * 0.62, Math.sin(angle) * radius);
    group.add(node);
  }

  return group;
}

function createPipelineModel() {
  const group = new THREE.Group();
  const material = new THREE.MeshStandardMaterial({
    color: 0x80ffba,
    emissive: 0x1b7a4e,
    emissiveIntensity: 0.44,
    metalness: 0.26,
    roughness: 0.32,
  });

  for (let i = 0; i < 5; i += 1) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5 + i * 0.16, 0.025, 12, 90), material);
    ring.position.set(i * 0.62, Math.sin(i) * 0.2, Math.cos(i * 0.8) * 0.2);
    ring.rotation.y = Math.PI / 2;
    group.add(ring);
  }

  const lineMat = new THREE.MeshStandardMaterial({ color: 0xf7f2e8, metalness: 0.4, roughness: 0.3 });
  const points = [
    new THREE.Vector3(-0.4, 0, 0),
    new THREE.Vector3(0.6, 0.32, -0.08),
    new THREE.Vector3(1.55, -0.18, 0.12),
    new THREE.Vector3(2.5, 0.22, -0.14),
    new THREE.Vector3(3.42, -0.02, 0.08),
  ];
  for (let i = 0; i < points.length - 1; i += 1) {
    group.add(cylinderBetween(points[i], points[i + 1], 0.035, lineMat));
  }

  return group;
}

function createRobotArm() {
  const group = new THREE.Group();
  const jointMat = new THREE.MeshPhysicalMaterial({
    color: 0xffbe55,
    emissive: 0x6f3800,
    emissiveIntensity: 0.34,
    metalness: 0.68,
    roughness: 0.22,
  });
  const armMat = new THREE.MeshPhysicalMaterial({
    color: 0xf7f2e8,
    metalness: 0.78,
    roughness: 0.27,
    clearcoat: 0.55,
  });

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.76, 0.32, 36), jointMat);
  group.add(base);

  const arm = new THREE.Group();
  const p0 = new THREE.Vector3(0, 0.18, 0);
  const p1 = new THREE.Vector3(0.52, 1.35, 0.1);
  const p2 = new THREE.Vector3(1.6, 1.9, -0.06);
  arm.add(cylinderBetween(p0, p1, 0.12, armMat));
  arm.add(cylinderBetween(p1, p2, 0.1, armMat));
  [p0, p1, p2].forEach((point, index) => {
    const joint = new THREE.Mesh(new THREE.SphereGeometry(index === 2 ? 0.2 : 0.24, 28, 16), jointMat);
    joint.position.copy(point);
    arm.add(joint);
  });
  const claw = new THREE.Group();
  claw.position.copy(p2);
  claw.add(cylinderBetween(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.38, 0.22, 0), 0.035, armMat));
  claw.add(cylinderBetween(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.38, -0.22, 0), 0.035, armMat));
  arm.add(claw);
  group.add(arm);
  return group;
}

function createServerStack() {
  const group = new THREE.Group();
  const body = new THREE.MeshPhysicalMaterial({
    color: 0x161614,
    metalness: 0.62,
    roughness: 0.36,
    clearcoat: 0.28,
  });
  const panel = new THREE.MeshStandardMaterial({
    color: 0x58f7ff,
    emissive: 0x0c7d86,
    emissiveIntensity: 0.8,
  });

  for (let i = 0; i < 5; i += 1) {
    const rack = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.28, 0.8), body);
    rack.position.y = i * 0.36;
    group.add(rack);

    const light = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.035, 0.026), panel);
    light.position.set(-0.48 + (i % 3) * 0.18, i * 0.36 + 0.03, 0.415);
    group.add(light);
  }

  const antenna = cylinderBetween(new THREE.Vector3(0.72, 1.78, 0), new THREE.Vector3(0.72, 2.42, 0), 0.018, panel);
  group.add(antenna);
  return group;
}

function createCircuitRibbon() {
  const group = new THREE.Group();
  const colors = [0x58f7ff, 0xffbe55, 0x80ffba, 0xff6d9f];
  for (let i = 0; i < 7; i += 1) {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-6.5, -2.8 + i * 0.86, -4.5 + i * 0.1),
      new THREE.Vector3(-3.4, -1.6 + Math.sin(i) * 0.72, -2.5),
      new THREE.Vector3(-0.3, 1.1 + Math.cos(i) * 0.5, -3.2),
      new THREE.Vector3(3.2, -0.8 + Math.sin(i * 1.4) * 0.8, -2.2),
      new THREE.Vector3(6.2, 2.6 - i * 0.5, -4.4),
    ]);
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 96, 0.011 + (i % 2) * 0.006, 8, false),
      new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.22,
      }),
    );
    group.add(tube);
  }
  return group;
}

function createParticleField() {
  const geometry = new THREE.BoxGeometry(0.034, 0.034, 0.034);
  const material = new THREE.MeshBasicMaterial({
    color: 0xf7f2e8,
    transparent: true,
    opacity: 0.42,
  });
  const mesh = new THREE.InstancedMesh(geometry, material, 360);
  const matrix = new THREE.Matrix4();
  const color = new THREE.Color();

  for (let i = 0; i < 360; i += 1) {
    const radius = 4.5 + Math.random() * 11;
    const angle = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 8;
    matrix.makeTranslation(Math.cos(angle) * radius, y, Math.sin(angle) * radius - 5);
    mesh.setMatrixAt(i, matrix);
    color.setHSL([0.51, 0.1, 0.38, 0.93][i % 4], 0.75, 0.65);
    mesh.setColorAt(i, color);
  }
  return mesh;
}

function createDataPlane() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "24px Consolas, monospace";
  const rows = [
    "ai: model integration -> active",
    "robotics: sensor loop online",
    "python automation: trading bot live",
    "design: creative visuals -> generated",
    "web ui: responsive module active",
  ];
  for (let y = 38; y < canvas.height; y += 42) {
    const text = rows[(y / 42) % rows.length | 0];
    ctx.fillStyle = y % 84 === 0 ? "rgba(88, 247, 255, .7)" : "rgba(247, 242, 232, .45)";
    ctx.fillText(text, 36 + ((y * 7) % 180), y);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.11,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(15, 7.5), material);
  return mesh;
}

function cylinderBetween(start, end, radius, material) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, 16), material);
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return mesh;
}

function Nav() {
  return h(
    "nav",
    { className: "site-nav", "aria-label": "Primary navigation" },
    h(
      "a",
      { className: "brand-mark", href: "#top", "aria-label": "Vishv Ranjan home" },
      h("span", { className: "mark-glyph" }, "VK"),
      h("span", { className: "brand-copy" }, h("strong", null, "Vishv Ranjan"), h("span", null, "AI + Frontend + Design")),
    ),
    h(
      "div",
      { className: "nav-links" },
      h("a", { href: "#signal" }, "Signal"),
      h("a", { href: "#work" }, "Work"),
      h("a", { href: "#story" }, "Story"),
      h("a", { href: "#contact" }, "Contact"),
      h("a", { className: "nav-action", href: resumePath, download: true }, Icon(Download), h("span", null, "CV")),
    ),
  );
}

function Hero() {
  return h(
    "section",
    { className: "hero", id: "top" },
    h(
      "div",
      { className: "section-inner hero-grid" },
      h(
        "div",
        { className: "hero-copy" },
        h("p", { className: "eyebrow" }, "Dehradun, India | AI & Frontend Focus"),
        h("h1", null, "Vishv", h("span", null, "Ranjan")),
        h(
          "p",
          { className: "hero-lede" },
          "BCA student building at the intersection of AI, automation, frontend development, and creative designing.",
        ),
        h(
          "div",
          { className: "hero-actions" },
          h("a", { className: "magnetic-button", href: "#work" }, Icon(Network), "Explore Work"),
          h("a", { className: "ghost-button", href: links.github, target: "_blank", rel: "noreferrer" }, Icon(Github), "GitHub"),
        ),
        h(
          "div",
          { className: "hero-meta" },
          h("div", null, h("strong", null, "BCA"), h("span", null, "ITM College, Dehradun")),
          h("div", null, h("strong", null, "2027"), h("span", null, "Expected graduation")),
          h("div", null, h("strong", null, "AI"), h("span", null, "Workshops, automation, APIs")),
        ),
        h(ConsolePanel),
      ),
    ),
  );
}

function ConsolePanel() {
  return h(
    "aside",
    { className: "status-console", "aria-label": "Portfolio status console" },
    h(
      "div",
      { className: "console-top" },
      h("span", { className: "console-lights" }, h("span"), h("span"), h("span")),
      h("span", null, "systems.profile"),
    ),
    h(
      "div",
      { className: "console-body" },
      terminal(">", "creative designing active", "ok"),
      terminal(">", "frontend modules loaded", "hot"),
      terminal(">", "robotics + IoT integration online", "ok"),
      terminal(">", "web interface energy: cinematic", "hot"),
      terminal(">", "seeking Frontend/AI opportunities", "ok"),
    ),
  );
}

function terminal(prompt, text, variant) {
  return h("div", { className: "terminal-line" }, h("span", { className: "prompt" }, prompt), h("span", { className: variant }, text));
}

function Marquee() {
  const text = [
    "AI Automation",
    "Creative Design",
    "Frontend Dev",
    "Python",
    "JavaScript",
    "Arduino",
    "Prompt Engineering",
    "Trading Bots",
    "Responsive UI",
    "Robotics",
  ];
  return h(
    "div",
    { className: "marquee-strip", "aria-hidden": "true" },
    h("div", { className: "marquee-track" }, [...text, ...text, ...text].map((item, index) => h("span", { key: `${item}-${index}` }, item))),
  );
}

function SignalSection() {
  return h(
    "section",
    { className: "section", id: "signal" },
    h(
      "div",
      { className: "section-inner" },
      h(SectionHeader, {
        kicker: "Capability Map",
        title: "System thinker with builder instincts.",
        text: "The portfolio is framed around the way Vishv works: understand the system, automate the repeatable parts, and keep the interface clear enough for people to use.",
      }),
      h(
        "div",
        { className: "signal-grid" },
        h(
          "div",
          { className: "metric-stack" },
          metric("2nd year", "BCA student with a practical project-first learning curve."),
          metric("4 lanes", "AI, frontend dev, IoT hardware, and creative design."),
          metric("2 languages", "Fluent in English and Hindi, comfortable communicating technical ideas."),
        ),
        h(
          "div",
          { className: "skill-matrix" },
          skillGroups.map((group) => h(SkillPanel, { key: group.title, ...group })),
        ),
      ),
    ),
  );
}

function SectionHeader({ kicker, title, text }) {
  return h(
    "div",
    { className: "section-header" },
    h("div", null, h("span", { className: "section-kicker" }, kicker), h("h2", null, title)),
    h("p", null, text),
  );
}

function metric(value, label) {
  return h("div", { className: "metric-item" }, h("strong", null, value), h("span", null, label));
}

function SkillPanel({ icon, title, text, chips }) {
  return h(
    "article",
    { className: "skill-panel" },
    h("div", { className: "skill-icon" }, Icon(icon, { size: 22 })),
    h("h3", null, title),
    h("p", null, text),
    h("div", { className: "chip-row" }, chips.map((chip) => h("span", { className: "chip", key: chip }, chip))),
  );
}

function WorkSection() {
  return h(
    "section",
    { className: "section", id: "work" },
    h(
      "div",
      { className: "section-inner" },
      h(SectionHeader, {
        kicker: "Selected Work",
        title: "Projects with circuitry under the surface.",
        text: "A focused set of experiences pulled from the CV: front-end modules, hardware automation, AI events, and leadership.",
      }),
      h(
        "div",
        { className: "project-grid" },
        projects.map((project, index) =>
          h(
            "article",
            { className: "project-card", key: project.title },
            h("div", { className: "project-visual", "aria-hidden": "true" }),
            h("span", { className: "project-index" }, String(index + 1).padStart(2, "0")),
            h("h3", null, project.title),
            h("p", null, project.text),
            h("div", { className: "chip-row" }, project.tags.map((tag) => h("span", { className: "chip", key: tag }, tag))),
          ),
        ),
      ),
    ),
  );
}

function StorySection() {
  return h(
    "section",
    { className: "section", id: "story" },
    h(
      "div",
      { className: "section-inner" },
      h(SectionHeader, {
        kicker: "Trajectory",
        title: "Education, leadership, and next target.",
        text: "The story points toward AI & Frontend: modern web interfaces, creative designing, automated logic, and intelligent solutions.",
      }),
      h(
        "div",
        { className: "timeline" },
        timeline.map((item) =>
          h(
            "article",
            { className: "timeline-card", key: item.title },
            h("span", { className: "timeline-year" }, item.year),
            h("div", null, h("h3", null, item.title), h("p", null, item.text)),
          ),
        ),
      ),
    ),
  );
}

function ContactSection() {
  const contactLinks = [
    { icon: Mail, label: "Email", value: "vishvranjan999@gmail.com", href: links.email },
    { icon: Phone, label: "Phone", value: "+91 6396617946", href: links.phone },
    { icon: Linkedin, label: "LinkedIn", value: "Vishv Ranjan", href: links.linkedin },
    { icon: Github, label: "GitHub", value: "VishuK-cyber", href: links.github },
    { icon: Instagram, label: "Instagram", value: "vishu_rk.18", href: links.instagram },
  ];

  return h(
    "section",
    { className: "section", id: "contact" },
    h(
      "div",
      { className: "section-inner contact-grid" },
      h(
        "div",
        { className: "contact-panel lead" },
        h("span", { className: "section-kicker" }, "Contact"),
        h("h2", null, "Build the next system."),
        h(
          "p",
          null,
          "Open to DevOps internship opportunities, campus technology work, AI automation projects, and practical hardware/software builds.",
        ),
        h(
          "div",
          { className: "contact-links" },
          contactLinks.map((item) =>
            h(
              "a",
              {
                className: "contact-link",
                href: item.href,
                target: item.href.startsWith("http") ? "_blank" : undefined,
                rel: item.href.startsWith("http") ? "noreferrer" : undefined,
                key: item.label,
              },
              h("span", null, Icon(item.icon), h("small", null, `${item.label}: ${item.value}`)),
              Icon(ExternalLink, { size: 16 }),
            ),
          ),
        ),
      ),
      h(
        "aside",
        { className: "contact-panel" },
        h("h3", null, "Current Signal"),
        h(
          "div",
          { className: "availability" },
          row("Location", "Dehradun, India"),
          row("Focus", "DevOps internship, Linux, CI/CD workflows, automation"),
          row("Interests", "Guitar, acoustic performance, electronics, music production, painting, arts"),
          row("Languages", "English, Hindi"),
        ),
      ),
    ),
  );
}

function row(label, value) {
  return h("div", { className: "availability-row" }, h("strong", null, label), h("span", null, value));
}

function FloatingPortrait({ progress }) {
  const rotation = useMemo(() => {
    const eased = Math.min(1, progress * 1.65);
    const fade = progress < 0.48 ? 1 : Math.max(0, 1 - (progress - 0.48) / 0.16);
    return {
      "--ry": `${-24 + eased * 238}deg`,
      "--rx": `${7 - eased * 23}deg`,
      "--rz": `${-2 + Math.sin(progress * Math.PI * 2) * 3}deg`,
      "--ty": `${Math.sin(progress * Math.PI) * -34}px`,
      "--portrait-opacity": fade,
    };
  }, [progress]);

  return h(
    "aside",
    { className: "portrait-dock", style: rotation, "aria-label": "Scroll-reactive portrait of Vishv Ranjan" },
    h(
      "div",
      { className: "portrait-stage" },
      h(
        "div",
        { className: "portrait-card" },
        h(
          "div",
          { className: "portrait-face portrait-front" },
          h("img", { src: portraitPath, alt: "Vishv Ranjan portrait" }),
          h("div", { className: "portrait-caption" }, h("span", null, "Vishv Ranjan"), h("span", null, "DevOps")),
        ),
        h(
          "div",
          { className: "portrait-face portrait-back" },
          h("strong", null, h("span", null, "Systems"), h("span", null, "Automation"), h("span", null, "Web"), h("span", null, "Robotics")),
        ),
        h("div", { className: "portrait-edge", "aria-hidden": "true" }),
      ),
    ),
  );
}

function SocialRail() {
  const items = [
    [Github, links.github, "GitHub"],
    [Linkedin, links.linkedin, "LinkedIn"],
    [Instagram, links.instagram, "Instagram"],
    [Mail, links.email, "Email"],
  ];
  return h(
    "div",
    { className: "social-rail", "aria-label": "Social links" },
    items.map(([IconComponent, href, label]) =>
      h(
        "a",
        {
          className: "icon-link",
          href,
          target: href.startsWith("http") ? "_blank" : undefined,
          rel: href.startsWith("http") ? "noreferrer" : undefined,
          key: label,
          "aria-label": label,
          title: label,
        },
        Icon(IconComponent),
      ),
    ),
  );
}

function Footer() {
  return h(
    "footer",
    { className: "site-footer" },
    h(
      "div",
      { className: "section-inner footer-inner" },
      h("span", null, "© 2026 Vishv Ranjan"),
      h("span", null, "Built with React, Three.js, and procedural 3D systems."),
    ),
  );
}

function App() {
  const progress = useScrollProgress();
  return h(
    "div",
    { className: "app-shell", style: { "--progress": progress } },
    h(SceneCanvas, { progress }),
    h("div", { className: "grid-veil", "aria-hidden": "true" }),
    h("div", { className: "grain", "aria-hidden": "true" }),
    h("div", { className: "spotlight", "aria-hidden": "true" }),
    h(Nav),
    h(SocialRail),
    h(FloatingPortrait, { progress }),
    h("div", { className: "progress-rail", "aria-hidden": "true" }, h("span")),
    h("main", { className: "page-content" }, h(Hero), h(Marquee), h(SignalSection), h(WorkSection), h(StorySection), h(ContactSection)),
    h(Footer),
  );
}

createRoot(document.getElementById("root")).render(h(App));
