const projects = [
  {
    id: 1,
    title: 'Scapedle',
    description:
      'A daily browser-based guessing game for Old School RuneScape players. Features two modes: Items (identify OSRS items using GE data with multi-attribute feedback) and Music (locate in-game tracks on an interactive world map with distance-based hints). Deployed and live at scapedle.net.',
    tech: ['React', 'JavaScript', 'Supabase', 'Leaflet', 'GitHub Actions'],
    githubUrl: 'https://github.com/baldiebaldie/Scapedle',
    demoUrl: 'https://scapedle.net',
  },
  {
    id: 2,
    title: '3D Facial Expression Recognition',
    description:
      'An affective computing model that classifies six facial expressions (Angry, Disgust, Fear, Happy, Sad, Surprise) from 3D landmark data. Trained on the BU-4DFE dataset using a Random Forest classifier with Leave-One-Subject-Out cross-validation to prevent data leakage.',
    tech: ['Python', 'Scikit-Learn', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/baldiebaldie/3D-Facial-Expression-Recognition',
    demoUrl: '',
  },
  {
    id: 3,
    title: 'Kinetic Core',
    description:
      'A minimalist bullet hell game featuring WASD movement, a focus mode for precision dodging, procedural bullet pattern generation, customizable difficulty sliders, and high score tracking.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/baldiebaldie/Kinetic-Core',
    demoUrl: '',
  },
]

export default projects
