// Comprehensive content translations for all museum content
// This includes all long narratives, curator notes, reflection feedback, etc.

import type { Language } from "@/contexts/LanguageContext";

export interface MultilingualContent {
  en: string;
  fr: string;
  es: string;
}

export function getContentTranslation(
  language: Language,
  key: string
): string | null {
  // Try to get from complete translations
  const { getCompleteTranslation } = require("./complete");
  const translation = getCompleteTranslation(language, key);
  
  // If translation is the same as key, it wasn't found
  if (translation === key) {
    return null;
  }
  
  return translation;
}

// Helper to create multilingual content
export function ml(en: string, fr: string, es: string): MultilingualContent {
  return { en, fr, es };
}

// Helper to get translated content from multilingual object
export function getMultilingualContent(
  content: MultilingualContent | string | undefined,
  language: Language
): string {
  if (!content) return "";
  if (typeof content === "string") return content;
  return content[language] || content.en;
}

// Object translations - all 12 objects with full content
export const objectTranslations: Record<string, Record<string, MultilingualContent>> = {
  "heuer-stopwatch-1960s": {
    title: ml(
      "Heuer Mechanical Stopwatch",
      "Chronomètre mécanique Heuer",
      "Cronómetro mecánico Heuer"
    ),
    subtitle: ml(
      "Time made visible",
      "Le temps rendu visible",
      "El tiempo hecho visible"
    ),
    wallLabel: ml(
      "Heuer mechanical stopwatch, c. 1960s. Used by track officials and coaches to standardize timing at meets and training sessions. Made time visible—and turned performance into a number.",
      "Chronomètre mécanique Heuer, vers 1960. Utilisé par les officiels et entraîneurs d'athlétisme pour standardiser le chronométrage lors des compétitions et des séances d'entraînement. A rendu le temps visible et a transformé la performance en nombre.",
      "Cronómetro mecánico Heuer, c. 1960. Utilizado por oficiales y entrenadores de atletismo para estandarizar el cronometraje en competiciones y sesiones de entrenamiento. Hizo visible el tiempo y convirtió el rendimiento en un número."
    ),
    curatorNote: ml(
      "This stopwatch didn't just measure time; it changed who had authority over performance. Before mechanical timing, officials and coaches judged speed by watching. After, the stopwatch became the final word. This shift wasn't neutral—it favored athletes whose performance could be measured in seconds, and it created a new language of splits and intervals that coaches and athletes learned to speak. The stopwatch reveals our culture's obsession with quantification: we trust numbers more than eyes.",
      "Ce chronomètre ne mesurait pas seulement le temps ; il changeait qui avait l'autorité sur la performance. Avant le chronométrage mécanique, les officiels et entraîneurs jugeaient la vitesse en regardant. Après, le chronomètre est devenu le dernier mot. Ce changement n'était pas neutre—il favorisait les athlètes dont la performance pouvait être mesurée en secondes, et il créait un nouveau langage de fractions et d'intervalles que les entraîneurs et athlètes ont appris à parler. Le chronomètre révèle l'obsession de notre culture pour la quantification : nous faisons plus confiance aux chiffres qu'aux yeux.",
      "Este cronómetro no solo medía el tiempo; cambió quién tenía autoridad sobre el rendimiento. Antes del cronometraje mecánico, los oficiales y entrenadores juzgaban la velocidad observando. Después, el cronómetro se convirtió en la última palabra. Este cambio no fue neutral—favoreció a los atletas cuyo rendimiento podía medirse en segundos, y creó un nuevo lenguaje de fracciones e intervalos que entrenadores y atletas aprendieron a hablar. El cronómetro revela la obsesión de nuestra cultura con la cuantificación: confiamos más en los números que en los ojos."
    ),
    whySignificant: ml(
      "The stopwatch represents a cultural shift toward quantification and standardization in sport. It emerged during a period when sport was becoming more professionalized, televised, and competitive. The tool didn't just measure performance—it changed how we understand excellence, shifting from subjective judgment to objective measurement. This change had profound implications: it made performance comparable across time and place, but it also narrowed what 'counted' as achievement to what could be measured in seconds. The stopwatch became a symbol of modernity and precision, reflecting broader cultural values about objectivity, fairness, and progress.",
      "Le chronomètre représente un changement culturel vers la quantification et la standardisation dans le sport. Il est apparu à une époque où le sport devenait plus professionnalisé, télévisé et compétitif. L'outil ne mesurait pas seulement la performance—il changeait notre compréhension de l'excellence, passant du jugement subjectif à la mesure objective. Ce changement a eu des implications profondes : il a rendu la performance comparable à travers le temps et l'espace, mais il a aussi réduit ce qui 'comptait' comme réalisation à ce qui pouvait être mesuré en secondes. Le chronomètre est devenu un symbole de modernité et de précision, reflétant des valeurs culturelles plus larges sur l'objectivité, l'équité et le progrès.",
      "El cronómetro representa un cambio cultural hacia la cuantificación y estandarización en el deporte. Surgió durante un período en el que el deporte se estaba volviendo más profesionalizado, televisado y competitivo. La herramienta no solo midió el rendimiento—cambió cómo entendemos la excelencia, pasando del juicio subjetivo a la medición objetiva. Este cambio tuvo implicaciones profundas: hizo que el rendimiento fuera comparable a través del tiempo y el espacio, pero también redujo lo que 'contaba' como logro a lo que podía medirse en segundos. El cronómetro se convirtió en un símbolo de modernidad y precisión, reflejando valores culturales más amplios sobre objetividad, equidad y progreso."
    ),
    signatureMoment: ml(
      "Imagine a 1960s track meet: the starter's pistol fires, and as runners sprint down the straightaway, an official stands at the finish line with a Heuer stopwatch in hand. When the first runner crosses, the official clicks the button, and a number appears—a time that will be recorded, compared, and remembered. This moment represents a fundamental shift: performance is no longer just 'fast' or 'slow' as judged by human eyes, but a precise number that can be compared across athletes, venues, and eras. The stopwatch transformed sport from subjective experience to objective data.",
      "Imaginez une compétition d'athlétisme des années 1960 : le pistolet de départ retentit, et alors que les coureurs sprinte sur la ligne droite, un officiel se tient à la ligne d'arrivée avec un chronomètre Heuer à la main. Quand le premier coureur franchit la ligne, l'officiel appuie sur le bouton, et un nombre apparaît—un temps qui sera enregistré, comparé et mémorisé. Ce moment représente un changement fondamental : la performance n'est plus simplement 'rapide' ou 'lente' comme jugée par les yeux humains, mais un nombre précis qui peut être comparé entre athlètes, lieux et époques. Le chronomètre a transformé le sport d'expérience subjective en données objectives.",
      "Imagine una competencia de atletismo de los años 1960: el pistoletazo de salida suena, y mientras los corredores corren por la recta, un oficial se para en la línea de meta con un cronómetro Heuer en la mano. Cuando el primer corredor cruza, el oficial presiona el botón, y aparece un número—un tiempo que será registrado, comparado y recordado. Este momento representa un cambio fundamental: el rendimiento ya no es solo 'rápido' o 'lento' como lo juzgan los ojos humanos, sino un número preciso que puede compararse entre atletas, lugares y épocas. El cronómetro transformó el deporte de experiencia subjetiva a datos objetivos."
    ),
  },
  // Add more objects as needed - this is a template
};

// Tour content translations
export const tourTranslations: Record<string, MultilingualContent> = {
  "context.problem.measuring": ml(
    "Before standardized measurement, sport was inconsistent. Times varied by venue, officials, and era. Records couldn't be compared. Athletes trained by feel, not data. The problem wasn't just technical—it was about authority. Who decides what 'fast' means? How do we make performance comparable across time and place? These early innovations solved a fundamental question: how to make sport measurable, comparable, and fair. Pay attention to how the stopwatch transformed not just timing, but the very language of performance.",
    "Avant la mesure standardisée, le sport était incohérent. Les temps variaient selon le lieu, les officiels et l'époque. Les records ne pouvaient pas être comparés. Les athlètes s'entraînaient au feeling, pas avec des données. Le problème n'était pas seulement technique—il s'agissait d'autorité. Qui décide ce que signifie 'rapide' ? Comment rendre la performance comparable à travers le temps et l'espace ? Ces innovations précoces ont résolu une question fondamentale : comment rendre le sport mesurable, comparable et équitable. Faites attention à la façon dont le chronomètre a transformé non seulement le chronométrage, mais aussi le langage même de la performance.",
    "Antes de la medición estandarizada, el deporte era inconsistente. Los tiempos variaban según el lugar, los oficiales y la época. Los récords no se podían comparar. Los atletas entrenaban por sensación, no por datos. El problema no era solo técnico—se trataba de autoridad. ¿Quién decide qué significa 'rápido'? ¿Cómo hacemos que el rendimiento sea comparable a través del tiempo y el espacio? Estas innovaciones tempranas resolvieron una pregunta fundamental: cómo hacer que el deporte sea medible, comparable y justo. Preste atención a cómo el cronómetro transformó no solo el cronometraje, sino el lenguaje mismo del rendimiento."
  ),
  "reflection.fairness": ml(
    "You prioritize making sport more equitable. Innovation should solve problems of exclusion and inequality first.",
    "Vous priorisez rendre le sport plus équitable. L'innovation devrait résoudre d'abord les problèmes d'exclusion et d'inégalité.",
    "Priorizas hacer que el deporte sea más equitativo. La innovación debería resolver primero los problemas de exclusión e desigualdad."
  ),
};

// Playbook translations
export const playbookTranslations: Record<string, Record<string, MultilingualContent>> = {
  "high-school-track-coach": {
    title: ml(
      "High School Track Coach with Limited Budget",
      "Entraîneur d'athlétisme au lycée avec budget limité",
      "Entrenador de atletismo de secundaria con presupuesto limitado"
    ),
    subtitle: ml(
      "Building a program on a tight budget",
      "Construire un programme avec un budget serré",
      "Construir un programa con un presupuesto ajustado"
    ),
    description: ml(
      "You're coaching a high school track team with minimal resources. You need tools that are affordable, durable, and teachable to young athletes. Your athletes range from beginners to competitive runners, and you want to give everyone a fair chance to improve.",
      "Vous entraînez une équipe d'athlétisme au lycée avec des ressources minimales. Vous avez besoin d'outils abordables, durables et enseignables aux jeunes athlètes. Vos athlètes vont des débutants aux coureurs compétitifs, et vous voulez donner à chacun une chance équitable de s'améliorer.",
      "Estás entrenando un equipo de atletismo de secundaria con recursos mínimos. Necesitas herramientas asequibles, duraderas y enseñables para jóvenes atletas. Tus atletas van desde principiantes hasta corredores competitivos, y quieres dar a todos una oportunidad justa de mejorar."
    ),
    "outcome.smart-budget-success.title": ml(
      "Smart Budget Success",
      "Succès avec budget intelligent",
      "Éxito con presupuesto inteligente"
    ),
    "outcome.smart-budget-success.description": ml(
      "Your season goes well. The stopwatch and starting blocks give athletes concrete feedback they can understand. Heart rate monitors help them learn pacing without breaking the bank. Your athletes improve steadily, and the program feels fair—everyone has access to the same tools. By mid-season, you've built a culture where measurement is part of learning, not just competition.",
      "Votre saison se passe bien. Le chronomètre et les starting-blocks donnent aux athlètes des retours concrets qu'ils peuvent comprendre. Les moniteurs de fréquence cardiaque les aident à apprendre le rythme sans casser la banque. Vos athlètes s'améliorent régulièrement, et le programme semble équitable—chacun a accès aux mêmes outils. À mi-saison, vous avez construit une culture où la mesure fait partie de l'apprentissage, pas seulement de la compétition.",
      "Tu temporada va bien. El cronómetro y los tacos de salida dan a los atletas retroalimentación concreta que pueden entender. Los monitores de frecuencia cardíaca les ayudan a aprender el ritmo sin arruinarse. Tus atletas mejoran constantemente, y el programa se siente justo—todos tienen acceso a las mismas herramientas. A mitad de temporada, has construido una cultura donde la medición es parte del aprendizaje, no solo de la competición."
    ),
  },
};
