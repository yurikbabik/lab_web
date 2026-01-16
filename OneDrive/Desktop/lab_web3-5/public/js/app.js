const API_URL = 'http://localhost:3000/api/gems';
let displayedGems = [];

const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const container = document.getElementById('gems-container');
const loadingIndicator = document.getElementById('loading-indicator');

const gemModal = document.getElementById('gem-modal');
const errorModal = document.getElementById('error-modal');
const gemForm = document.getElementById('gem-form');

function showErrorModal(msg) {
    document.getElementById('error-message').textContent = msg;
    errorModal.classList.add('modal-visible');
}

async function fetchGems() {
    loadingIndicator.style.display = 'block';

    const searchValue = searchInput.value;
    const sortValue = sortSelect.value;

    const url = new URL(API_URL);
    if (searchValue) url.searchParams.append('search', searchValue);
    if (sortValue) url.searchParams.append('sort', sortValue);

    try {
        console.log(`Sending request to: ${url}`);

        const response = await fetch(url);
        if (!response.ok) throw new Error('Помилка сервера');
        
        displayedGems = await response.json();
        
        // Server online
        renderGems(displayedGems);
    } catch (error) {
        console.error(error);
        // Server error
        container.innerHTML = '<p class="text-center col-span-3" style="color: #ff6b6b;">Не вдалося отримати дані з сервера.</p>';
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

function renderGems(gems) {
    container.innerHTML = '';
    if (gems.length === 0) {
        container.innerHTML = '<p class="text-center col-span-3" style="color: #000;">Нічого не знайдено.</p>';
        return;
    }
    container.innerHTML = gems.map(gem => `
        <div class="gem-card p-6 rounded-lg flex flex-col justify-between" style="border: 2px solid #000; background: #fff;">
            <div>
                <h3 class="text-2xl font-bold" style="color: #000;">${gem.name}</h3>
                <div class="mt-3" style="color: #000;">
                    <p><strong>Карат:</strong> ${gem.weight}</p>
                    <p class="mt-1"><strong>Ціна:</strong> ${gem.price} $</p>
                </div>
            </div>
            <div class="card-actions mt-4">
                <button class="btn-edit" data-id="${gem.id}">Редагувати</button>
                <button class="btn-delete" data-id="${gem.id}">Видалити</button>
            </div>
        </div>
    `).join('');
}

searchInput.addEventListener('input', fetchGems);

sortSelect.addEventListener('change', fetchGems);

async function createGem(data) {
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    fetchGems(); 
}

async function updateGem(id, data) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    fetchGems();
}

async function deleteGem(id) {
    if(!confirm("Видалити цей камінь?")) return;
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchGems();
}

const openModal = (mode, id = null) => {
    gemForm.reset();
    gemForm.dataset.mode = mode;
    document.getElementById('gem-id-input').value = id || '';
    
    if (mode === 'edit') {
        const gem = displayedGems.find(g => String(g.id) === String(id));
        if (gem) {
            document.getElementById('name-input').value = gem.name;
            document.getElementById('type-input').value = gem.type;
            document.getElementById('weight-input').value = gem.weight;
            document.getElementById('price-input').value = gem.price;
        }
    }
    gemModal.classList.add('modal-visible');
};

const closeModal = () => gemModal.classList.remove('modal-visible');

gemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById('name-input').value,
        type: document.getElementById('type-input').value,
        weight: parseFloat(document.getElementById('weight-input').value),
        price: parseInt(document.getElementById('price-input').value)
    };
    const mode = gemForm.dataset.mode;
    closeModal();
    if (mode === 'create') await createGem(data);
    else await updateGem(document.getElementById('gem-id-input').value, data);
});

container.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (!id) return;
    if (e.target.classList.contains('btn-edit')) openModal('edit', id);
    else if (e.target.classList.contains('btn-delete')) deleteGem(id);
});

document.getElementById('create-new-btn').addEventListener('click', () => openModal('create'));
document.getElementById('modal-close-btn').onclick = closeModal;
document.getElementById('error-close-btn').onclick = () => errorModal.classList.remove('modal-visible');

document.getElementById('apply-sort-btn').addEventListener('click', () => {
    const total = displayedGems.reduce((acc, curr) => acc + curr.price, 0);
    alert(`Загальна вартість колекції: ${total} $`);
});

fetchGems();
