// Importa los hechizos cargados en el array spells.js
import {
  spells
} from "./spells.js";

const spellsPerPage = 1;
let currentPage = 1;
let totalPages = Math.ceil(spells.length / spellsPerPage);

function createSpellCard(spell) {
  // 2 - CREA EL CUERPO DE LA CARTA .spell-card
  const spellCard = document.createElement('div');
  spellCard.classList.add('spell-card');

  // 1 CREA DIV PADRE .card-body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  cardBody.appendChild(spellCard);

  const spellName = document.createElement('h3');
  spellName.textContent = spell.name;
  spellCard.appendChild(spellName);

  const spellCastingTime = document.createElement('p');
  spellCastingTime.textContent = `Casting Time: ${spell.castingTime}`;
  spellCard.appendChild(spellCastingTime);

  const spellSchool = document.createElement('p');
  spellSchool.textContent = `School: ${spell.school}`;
  spellCard.appendChild(spellSchool);

  const spellComponents = document.createElement('p');
  spellComponents.textContent = `Components: ${spell.components}`;
  spellCard.appendChild(spellComponents);

  const spellLevel = document.createElement('div');
  spellLevel.classList.add('spell-level');
  spellLevel.textContent = `${spell.level}`;
  spellCard.appendChild(spellLevel);

  const spellImage = document.createElement('img');
  spellImage.src = spell.image;
  spellCard.appendChild(spellImage);

  if (spell.materialComponents) {
    const spellMaterialComponents = document.createElement('p');
    spellMaterialComponents.textContent = `Materials: ${spell.materialComponents}`;
    spellCard.appendChild(spellMaterialComponents);
  }

  const spellAttributes = document.createElement('div');
  spellAttributes.classList.add('spell-attributes');
  spellCard.appendChild(spellAttributes);

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
  const spellBoxDescription = document.createElement('div');
  spellBoxDescription.classList.add('spell-box-description');
  spellCard.appendChild(spellBoxDescription);

  const spellDescription = document.createElement('p');
  spellDescription.innerHTML = spell.description.replace(/~/g, '<br>');
  spellBoxDescription.appendChild(spellDescription);

  return cardBody;
}

function asignarEscuelaMagia(spell, cardBody) {
  const esAbjuracion = spell.school.toLowerCase().includes("abjuración");
  const esAdivinacion = spell.school.toLowerCase().includes("divination");
  const esConjuracion = spell.school.toLowerCase().includes("conjuration");
  const esEncantamiento = spell.school.toLowerCase().includes("encantamiento");
  const esEvocacion = spell.school.toLowerCase().includes("evocation");
  const esIlusionismo = spell.school.toLowerCase().includes("ilusionismo");
  const esNigromancia = spell.school.toLowerCase().includes("nigromancia");
  const esTransmutacion = spell.school.toLowerCase().includes("transmutación");

  if (esAbjuracion) {
    cardBody.classList.add('abjuracion');
  } else if (esAdivinacion) {
    cardBody.classList.add('adivinacion');
  } else if (esConjuracion) {
    cardBody.classList.add('conjuracion');
  } else if (esEncantamiento) {
    cardBody.classList.add('encantamiento');
  } else if (esEvocacion) {
    cardBody.classList.add('evocacion');
  } else if (esIlusionismo) {
    cardBody.classList.add('ilusionismo');
  } else if (esNigromancia) {
    cardBody.classList.add('nigromancia');
  } else if (esTransmutacion) {
    cardBody.classList.add('transmutacion');
  }
  console.log('No pertenece a ninguna escuela de magia');
}

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

  spellsContainer.addEventListener('mousedown', (event) => {
    if (event.clientX < window.innerWidth / 2) {
      goToPreviousPage();
    } else {
      goToNextPage();
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  spellsContainer.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
  });

  spellsContainer.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipeGesture();
  });

  function handleSwipeGesture() {
    if (touchEndX < touchStartX) {
      goToNextPage();
    } else if (touchEndX > touchStartX) {
      goToPreviousPage();
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
