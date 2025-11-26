// ============================================
// Main JavaScript Entry Point
// ============================================

import { initHeader } from './header.js';
import { initPlanConfigurator } from './plan-configurator.js';
import { initSmoothScroll } from './utils.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
 initHeader();
 initPlanConfigurator();
 initSmoothScroll();
});
