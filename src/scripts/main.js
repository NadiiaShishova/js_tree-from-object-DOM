'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const treeContainer = document.querySelector('#tree');

function createTreeRecursive(container, obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    const li = document.createElement('li');

    li.textContent = key;

    if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
      createTreeRecursive(li, obj[key]);
    }

    ul.appendChild(li);
  }

  container.appendChild(ul);
}

createTreeRecursive(treeContainer, food);
