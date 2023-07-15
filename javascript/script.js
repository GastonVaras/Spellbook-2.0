// Importa los hechizos cargados en el array spells.js
import {
  spells
} from "./spells.js";

let spellsPerPage = calculateSpellsPerPage();
let currentPage = 1;
let totalPages = Math.ceil(spells.length / spellsPerPage);

function calculateSpellsPerPage() {
  const screenWidth = window.innerWidth;
  // Define las resoluciones y la cantidad correspondiente de hechizos por página
  const resolutions = [{
      width: 425,
      spellsPerPage: 1
    },
    {
      width: 768,
      spellsPerPage: 2
    },
    {
      width: 1024,
      spellsPerPage: 3
    },
    {
      width: 1440,
      spellsPerPage: 4
    },
    // Agrega más resoluciones según tus necesidades
  ];
  // Recorre las resoluciones de manera descendente y devuelve la cantidad de hechizos por página correspondiente a la primera resolución que coincide o la cantidad máxima si ninguna coincide
  for (let i = resolutions.length - 1; i >= 0; i--) {
    if (screenWidth >= resolutions[i].width) {
      return resolutions[i].spellsPerPage;
    }
  }
  return resolutions[0].spellsPerPage; // Valor predeterminado
}

// Actualiza la cantidad de hechizos por página al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  spellsPerPage = calculateSpellsPerPage();
  totalPages = Math.ceil(spells.length / spellsPerPage);
  renderSpells();
});

// renderSpells se encarga de actualizar el contenido del contenedor de hechizos en función de la página actual. 
//Calcula los índices de inicio y fin para determinar qué hechizos mostrar, crea las tarjetas de hechizo correspondientes y las agrega al contenedor.
function renderSpells() {
  const spellsContainer = document.getElementById('spells-container');
  spellsContainer.innerHTML = '';

  const start = (currentPage - 1) * spellsPerPage;
  const end = start + spellsPerPage;
  const spellsToRender = spells.slice(start, end);

  spellsToRender.forEach((spell) => {
    const cardBody = createSpellCard(spell);
    asignarEscuelaMagia(spell, cardBody);
    spellsContainer.appendChild(cardBody);
  });
}


function createSpellCard(spell) {

  // Paso 1: Crear el cuerpo de la carta (spellCardbody) y el contenido (spellContent)
  const spellCardbody = document.createElement('div');
  spellCardbody.classList.add('spell-cardbody');
  spellCardbody.addEventListener('click', toggleSpellClass);
  spellCardbody.dataset.hasClass = 'false';

  const spellContent = document.createElement('div');
  spellContent.classList.add('spell-content');
  spellCardbody.appendChild(spellContent);

  // Paso 2 - Crear los 5 divs contenedores (title, illustration, attributes, description, extra)
  const spellTitle = document.createElement('div');
  spellTitle.classList.add('spell-title');
  spellContent.appendChild(spellTitle);

  const spellIllustration = document.createElement('div');
  spellIllustration.classList.add('spell-illustration');
  spellContent.appendChild(spellIllustration);

  const spellAttributes = document.createElement('div');
  spellAttributes.classList.add('spell-attributes');
  spellContent.appendChild(spellAttributes);

  const spellBoxDescription = document.createElement('div');
  spellBoxDescription.classList.add('spell-box-description');
  spellContent.appendChild(spellBoxDescription);

  const spellExtra = document.createElement('div');
  spellExtra.classList.add('spell-extra');
  spellContent.appendChild(spellExtra);

  // Paso 3 - Completar spellTitle (div .spell-title-text; p .spell-level)
  const spellTitleText = document.createElement('div');
  spellTitleText.classList.add('spell-title-text');
  spellTitle.appendChild(spellTitleText);

  const spellLevel = document.createElement('p');
  spellLevel.classList.add('spell-level');
  spellLevel.textContent = `${spell.level}`;
  spellTitle.appendChild(spellLevel);

  // Paso 4 - Completar spellTitleText (h3 name; p casting time; p school; p components)
  const spellName = document.createElement('h3');
  spellName.textContent = spell.name;
  spellTitleText.appendChild(spellName);

  const spellCastingTime = document.createElement('p');
  spellCastingTime.textContent = `Casting Time: ${spell.castingTime}`;
  spellTitleText.appendChild(spellCastingTime);

  // La escuela me gustaria que se refleje en el diseño
  const spellSchool = document.createElement('p');
  spellSchool.textContent = `School: ${spell.school}`;
  spellTitleText.appendChild(spellSchool);

  const spellComponents = document.createElement('p');
  spellComponents.textContent = `Components: ${spell.components}`;
  spellTitleText.appendChild(spellComponents);

  // Paso 5 - Completar spellIllustration (img; p .spell-image-description)
  const spellImage = document.createElement('img');
  spellImage.src = spell.image;
  spellIllustration.appendChild(spellImage);

  const spellImageDescription = document.createElement('p')
  spellImageDescription.classList.add('spell-image-description');
  spellImageDescription.textContent = `${spell.imageDescription}`;
  // Esto permite poner "punto aparte" en spells.js por medio del tilde: ~
  spellImageDescription.innerHTML = spell.imageDescription.replace(/~/g, '<br>');
  spellIllustration.appendChild(spellImageDescription);

  // Paso 6 - Completar spellAttributes (range, target, effect, area, duration, savingThrow, spellResistance)
  // Los atributos en if statement solo son visibles si tiene info el hechizo
  if (spell.range) {
    const spellRange = document.createElement('p');
    spellRange.textContent = `Range: ${spell.range}`;
    spellAttributes.appendChild(spellRange);
  }
  if (spell.target) {
    const spellTarget = document.createElement('p');
    spellTarget.textContent = `Target: ${spell.target}`;
    spellAttributes.appendChild(spellTarget);
  }
  if (spell.effect) {
    const spellEffect = document.createElement('p');
    spellEffect.textContent = `Effect: ${spell.effect}`;
    spellAttributes.appendChild(spellEffect);
  }
  if (spell.area) {
    const spellArea = document.createElement('p');
    spellArea.textContent = `Area: ${spell.area}`;
    spellAttributes.appendChild(spellArea);
  }

  const spellDuration = document.createElement('p');
  spellDuration.textContent = `Duration: ${spell.duration}`;
  spellAttributes.appendChild(spellDuration);

  if (spell.savingThrow) {
    const spellSavingThrow = document.createElement('p');
    spellSavingThrow.textContent = `Saving Throw: ${spell.savingThrow}`;
    spellAttributes.appendChild(spellSavingThrow);
  }
  if (spell.spellResistance) {
    const spellResistance = document.createElement('p');
    spellResistance.textContent = `Spell Resistance: ${spell.spellResistance}`;
    spellAttributes.appendChild(spellResistance);
  }

  // Paso 7 - Completar spellDescription 
  const spellDescription = document.createElement('p');
  spellDescription.innerHTML = spell.description.replace(/~/g, '<br>');
  spellBoxDescription.appendChild(spellDescription);

  // Paso 8 - Completar spellExtra
  if (spell.materialComponents) {
    const spellMaterialComponents = document.createElement('p');
    spellMaterialComponents.textContent = `Materials: ${spell.materialComponents}`;
    spellExtra.appendChild(spellMaterialComponents);
  }
  if (spell.XPCost) {
    const spellXPCost = document.createElement('p');
    spellXPCost.textContent = `XPCost: ${spell.XPCost}`;
    spellAttributes.appendChild(spellXPCost);
  }
  if (spell.focus) {
    const spellFocus = document.createElement('p');
    spellFocus.textContent = `XPCost: ${spell.focus}`;
    spellAttributes.appendChild(spellFocus);
  }

  return spellCardbody;
}

// Toggle para "preparar" hechizos
let isSpellCardActive = false;

function toggleSpellClass(event) {
  const spellCardbody = event.currentTarget;

  if (isSpellCardActive) {
    spellCardbody.classList.remove('unprepared');
  } else {
    spellCardbody.classList.add('unprepared');
  }

  // Actualizamos el estado del toggle
  isSpellCardActive = !isSpellCardActive;
}

// Determina escuela de magia y asigna color correspondiente al fondo
function asignarEscuelaMagia(spell, cardBody) {
  const esAbjuration = spell.school.toLowerCase().includes("abjuration");
  const esDivination = spell.school.toLowerCase().includes("divination");
  const esConjuration = spell.school.toLowerCase().includes("conjuration");
  const esEnchantment = spell.school.toLowerCase().includes("enchantment");
  const esEvocation = spell.school.toLowerCase().includes("evocation");
  const esIllusion = spell.school.toLowerCase().includes("illusion");
  const esNecromancy = spell.school.toLowerCase().includes("necromancy");
  const esTransmutation = spell.school.toLowerCase().includes("transmutation");

  const spellContent = cardBody.querySelector('.spell-content');


  if (esAbjuration) {
    spellContent.classList.add('abjuration');
  } else if (esDivination) {
    spellContent.classList.add('divination');
  } else if (esConjuration) {
    spellContent.classList.add('conjuration');
  } else if (esEnchantment) {
    spellContent.classList.add('enchantment');
  } else if (esEvocation) {
    spellContent.classList.add('evocation');
  } else if (esIllusion) {
    spellContent.classList.add('illusion');
  } else if (esNecromancy) {
    spellContent.classList.add('necromancy');
  } else if (esTransmutation) {
    spellContent.classList.add('transmutation');
  }
}

// Funciones que permiten el desplazamiento entre páginas
function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderSpells();
  }
}

function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    renderSpells();
  }
}
document.addEventListener('DOMContentLoaded', () => {
  totalPages = Math.ceil(spells.length / spellsPerPage);
  renderSpells();

  const spellsContainer = document.getElementById('spells-container');

  let touchStartX = 0;
  let touchEndX = 0;
  let minSwipeDistance = 25; // Distancia mínima requerida para considerar un swipe

  spellsContainer.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
  });

  spellsContainer.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipeGesture();
  });

  function handleSwipeGesture() {
    let swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > minSwipeDistance) {
      goToPreviousPage();
    } else if (swipeDistance < -minSwipeDistance) {
      goToNextPage();
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      goToPreviousPage();
    } else if (event.key === 'ArrowRight') {
      goToNextPage();
    }
  });
});