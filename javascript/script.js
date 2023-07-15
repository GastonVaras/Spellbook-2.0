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
  const resolutions = [
    { width: 425, spellsPerPage: 1 },
    { width: 768, spellsPerPage: 2 },
    { width: 1024, spellsPerPage: 3 },
    { width: 1440, spellsPerPage: 4 },
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


  // // "spellsContainer = #spells-container"
  // const spellsContainer = document.getElementById('spells-container');
  // // 1 - Crear "spellCardbody = .spell-card" y meterlo dentro de "spellsContainer"
  // const spellCardbody = document.createElement('div');
  // spellCardbody.classList.add('spell-cardbody');
  // spellsContainer.appendChild(spellCardbody);


  const spellCardbody = document.createElement('div');
  spellCardbody.classList.add('spell-cardbody');



  // 2 - Crear "spellContent = spell-content" y meterla dentro de spellCardbody
  const spellContent = document.createElement('div');
  spellContent.classList.add('spell-content');
  spellCardbody.appendChild(spellContent);

  // 3 - Crear "spellTitle = .spell-title" y meterlo dentro de spellContent
  const spellTitle = document.createElement('div');
  spellTitle.classList.add('spell-title');
  spellContent.appendChild(spellTitle);




  const spellTitleText = document.createElement('div');
  spellTitleText.classList.add('spell-title-text');
  spellTitle.appendChild(spellTitleText);





  // 4- HIJO DE .spell-title
  const spellName = document.createElement('h3');
  spellName.textContent = spell.name;
  spellTitleText.appendChild(spellName);
  // 4- HIJO DE .spell-title
  const spellCastingTime = document.createElement('p');
  spellCastingTime.textContent = `Casting Time: ${spell.castingTime}`;
  spellTitleText.appendChild(spellCastingTime);
  // 4- HIJO DE .spell-title
  const spellSchool = document.createElement('p');
  spellSchool.textContent = `School: ${spell.school}`;
  spellTitleText.appendChild(spellSchool);
  // 4- HIJO DE .spell-title
  const spellComponents = document.createElement('p');
  spellComponents.textContent = `Components: ${spell.components}`;
  spellTitleText.appendChild(spellComponents);







  // 4- HIJO DE .spell-title 
  const spellLevel = document.createElement('p');
  spellLevel.classList.add('spell-level');
  spellLevel.textContent = `${spell.level}`;
  spellTitle.appendChild(spellLevel);



  // 5 - Crear "spellIllustration = .spell/illustration" y meterlo dentro de spellContent
  const spellIllustration = document.createElement('div');
  spellIllustration.classList.add('spell-illustration');
  spellContent.appendChild(spellIllustration);
  // 6 - crear "spellImage y meterla dentro de spellIllustration"
  const spellImage = document.createElement('img');
  spellImage.src = spell.image;
  spellIllustration.appendChild(spellImage);
  
  const spellImageDescription = document.createElement('p')
  spellImageDescription.classList.add('spell-image-description');
  spellImageDescription.textContent = `${spell.imageDescription}`;
  spellIllustration.appendChild(spellImageDescription);

  // 7 - Crear "spellAttributes = .spell-attributes" y meterlo dentro de spellContent
  const spellAttributes = document.createElement('div');
  spellAttributes.classList.add('spell-attributes');
  spellContent.appendChild(spellAttributes);
  // 8- HIJO DE .spell-attributes solo visible si tiene info el hechizo
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

  // 8- HIJO DE .spell-attributes 
  const spellDuration = document.createElement('p');
  spellDuration.textContent = `Duration: ${spell.duration}`;
  spellAttributes.appendChild(spellDuration);
  // 8- HIJO DE .spell-attributes solo visible si tiene info el hechizo
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

  // 9 - Crear "spellBoxDescription = .spell-box-description" y meterla dentro de spellContent
  const spellBoxDescription = document.createElement('div');
  spellBoxDescription.classList.add('spell-box-description');
  spellContent.appendChild(spellBoxDescription);
  // 10 - Crear parrafo de descripción
  const spellDescription = document.createElement('p');
  spellDescription.innerHTML = spell.description.replace(/~/g, '<br>');
  spellBoxDescription.appendChild(spellDescription);

  // 11 - Crear "spellExtra = .spell-extra"
  const spellExtra = document.createElement('div');
  spellExtra.classList.add('spell-extra');
  spellContent.appendChild(spellExtra);

  // 12 - HIJO DE .spellExtra solo visible si tiene info el hechizo
  if (spell.materialComponents) {
    const spellMaterialComponents = document.createElement('p');
    spellMaterialComponents.textContent = `Materials: ${spell.materialComponents}`;
    spellExtra.appendChild(spellMaterialComponents);
  }

  // 13 - imprimir toda la carta
  return spellCardbody;
}

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
  console.log('No pertenece a ninguna escuela de magia');
}


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