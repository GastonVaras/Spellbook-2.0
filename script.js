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
  spellCastingTime.classList.add('spell-casting-time');
  spellCastingTime.textContent = `Tiempo de Lanzamiento: ${spell.castingTime}`;
  spellCard.appendChild(spellCastingTime);

  const spellSchool = document.createElement('p');
  spellSchool.textContent = `Escuela: ${spell.school}`;
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

  const spellAttributes = document.createElement('div');
  spellAttributes.classList.add('spell-attributes');
  spellCard.appendChild(spellAttributes);

  const spellRange = document.createElement('p');
  spellRange.textContent = `Range: ${spell.range}`;
  spellAttributes.appendChild(spellRange);

  const spellEffect = document.createElement('p');
  spellEffect.textContent = `Efecto: ${spell.efecto}`;
  spellAttributes.appendChild(spellEffect);

  const spellArea = document.createElement('p');
  spellArea.textContent = `Area: ${spell.area}`;
  spellAttributes.appendChild(spellArea);

  const spellDuration = document.createElement('p');
  spellDuration.textContent = `Duration: ${spell.duration}`;
  spellAttributes.appendChild(spellDuration);

  const spellSavingThrow = document.createElement('p');
  spellSavingThrow.textContent = `Saving Throw: ${spell.savingThrow}`;
  spellAttributes.appendChild(spellSavingThrow);

  const spellResistance = document.createElement('p');
  spellResistance.textContent = `Spell Resistance: ${spell.spellResistance}`;
  spellAttributes.appendChild(spellResistance);

  const spellBoxDescription = document.createElement('div');
  spellBoxDescription.classList.add('spell-box-description');
  spellCard.appendChild(spellBoxDescription);

  const spellDescription = document.createElement('p');
  spellDescription.innerHTML = spell.description.replace(/~/g, '<br>');
  spellBoxDescription.appendChild(spellDescription);

  
  return cardBody;
}


// Permite que se cargue la imagen correspondiente a la escuela de magia del hechizo
function asignarEscuelaMagia(spell, cardBody) {
  const esAbjuracion = spell.school.toLowerCase().includes("abjuracion");
  const esAdivinacion = spell.school.toLowerCase().includes("adivinacion");
  const esConjuracion = spell.school.toLowerCase().includes("conjuracion");

  if (esAbjuracion) {
    cardBody.classList.add('abjuracion');
  } else if (esAdivinacion) {
    cardBody.classList.add('adivinacion');
  } else if (esConjuracion) {
    cardBody.classList.add('conjuracion');
  }
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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      goToPreviousPage();
    } else if (event.key === 'ArrowRight') {
      goToNextPage();
    }
  });
});