// ============================================
// Plan Configurator Module
// ============================================

export function initPlanConfigurator() {
 const optionCards = document.querySelectorAll('.c-card--option');
 const summaryItems = document.querySelector('.p-plan__summary-items');
 const emptyState = summaryItems?.querySelector('.p-plan__summary-empty');
 const totalValueElement = document.querySelector('.p-plan__summary-total-value');

 // Base plan price
 const BASE_PRICE = 40000;

 if (!optionCards.length) return;

 const selectedOptions = new Map(); // Changed to Map to store price info

 optionCards.forEach(card => {
  card.addEventListener('click', () => {
   const optionId = card.dataset.optionId;
   const optionTitle = card.dataset.optionTitle;
   const optionPrice = parseInt(card.dataset.optionPrice) || 0;

   if (selectedOptions.has(optionId)) {
    // Deselect
    selectedOptions.delete(optionId);
    card.classList.remove('is-selected');
    removeFromSummary(optionId);
   } else {
    // Select
    selectedOptions.set(optionId, { title: optionTitle, price: optionPrice });
    card.classList.add('is-selected');
    addToSummary(optionId, optionTitle);
   }

   updateEmptyState();
   updateTotalPrice();
  });
 });

 function addToSummary(id, title) {
  if (!summaryItems) return;

  const item = document.createElement('div');
  item.className = 'p-plan__summary-item p-plan__summary-item--selected';
  item.dataset.optionId = id;
  item.innerHTML = `
      <div class="p-plan__summary-item-info">
        <div class="p-plan__summary-item-dot p-plan__summary-item-dot--purple"></div>
        <span class="p-plan__summary-item-name">${title}</span>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="color: #06D6A0;">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

  summaryItems.appendChild(item);
 }

 function removeFromSummary(id) {
  if (!summaryItems) return;

  const item = summaryItems.querySelector(`[data-option-id="${id}"]`);
  if (item) {
   item.remove();
  }
 }

 function updateEmptyState() {
  if (!emptyState) return;

  if (selectedOptions.size > 0) {
   emptyState.style.display = 'none';
  } else {
   emptyState.style.display = 'block';
  }
 }

 function updateTotalPrice() {
  if (!totalValueElement) return;

  // Calculate total: base price + selected options
  let total = BASE_PRICE;
  selectedOptions.forEach(option => {
   total += option.price;
  });

  // Format with thousands separator
  const formattedTotal = total.toLocaleString('ja-JP');
  totalValueElement.textContent = `¥${formattedTotal}`;
 }

 // Initialize with base price
 updateTotalPrice();
}
