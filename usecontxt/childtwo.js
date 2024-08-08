function Childtwo(){
    return(
        <div>
            <h1>Child Two</h1>
        </div>
    )
}
export default Childtwo;




/* 
let draggedEntity = null;
let history = [];
let redoStack = [];

// Record an action in the history stack
function recordAction(action) {
    history.push(action);
    redoStack = []; // Clear the redo stack on a new action
}

// Handle drag events
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    const data = event.target.id;

    const newEntity = document.createElement('a-entity');
    switch (data) {
        case 'SI':
            newEntity.setAttribute('gltf-model', '#sofa');
            newEntity.setAttribute('rotation', { x: 0, y: 180, z: 0 });
            break;
        // Add other cases as needed
    }

    newEntity.setAttribute('visible', 'false');
    newEntity.setAttribute('id', 'dragged-entity');
    document.getElementById('scene').appendChild(newEntity);
    draggedEntity = newEntity;
}

function drop(event) {
    event.preventDefault();
    const entity = document.getElementById('dragged-entity');
    if (entity) {
        entity.setAttribute('visible', 'true');
        entity.classList.add('draggable');
        entity.setAttribute('restrict-movement', '');
        entity.setAttribute('objrotate', '');
        entity.setAttribute('update-position', '');
        entity.setAttribute('draggable', '');
        entity.setAttribute('shadow', 'cast', 'true');
        entity.removeAttribute('id');

        const action = {
            type: 'add',
            entity: entity.cloneNode(true), // Record a clone of the entity
            position: entity.getAttribute('position')
        };
        recordAction(action);
        draggedEntity = null;
    }
}

// Undo last action
function undo() {
    const action = history.pop();
    if (action) {
        if (action.type === 'add') {
            const entity = document.querySelector(`#${action.entity.getAttribute('id')}`);
            if (entity) {
                entity.remove(); // Remove the entity
            }
            redoStack.push(action);
        }
        // Add more action types as needed
    }
}

// Redo last undone action
function redo() {
    const action = redoStack.pop();
    if (action) {
        if (action.type === 'add') {
            const entity = document.createElement('a-entity');
            entity.setAttribute('gltf-model', action.entity.getAttribute('gltf-model'));
            entity.setAttribute('position', action.position);
            // Set other attributes as needed
            document.getElementById('scene').appendChild(entity);
            recordAction(action); // Record re-applied action in history
        }
        // Add more action types as needed
    }
}

// Update entity position
function updateEntityPosition(event) {
    const scene = document.getElementById('scene');
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    const camera = document.querySelector('a-camera').getObject3D('camera');
    const cameraPosition = camera.position.clone();
    const planeZ = -5; // Adjust based on your scene

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera({ x: mouseX, y: mouseY }, camera);

    const planeNormal = new THREE.Vector3(0, 0, -1);
    const plane = new THREE.Plane(planeNormal, planeZ);
    plane.translate(cameraPosition);

    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersection);

    if (draggedEntity) {
        const previousPosition = draggedEntity.getAttribute('position');
        draggedEntity.setAttribute('position', intersection);

        // Record the position change for undo
        const action = {
            type: 'move',
            entityId: draggedEntity.getAttribute('id'),
            previousPosition: previousPosition,
            newPosition: intersection
        };
        recordAction(action);
    }
}

// Implement event listeners for undo and redo buttons
document.getElementById('undoButton').addEventListener('click', undo);
document.getElementById('redoButton').addEventListener('click', redo);

// Add event listeners to your drag and drop elements
document.getElementById('yourDraggableElement').addEventListener('dragstart', drag);
document.getElementById('scene').addEventListener('drop', drop);
document.getElementById('scene').addEventListener('dragover', allowDrop);

*/