/**
 * WP Org Chart JavaScript
 * 
 * Dynamic SVG line drawing for organizational chart connections
 */

(function() {
    'use strict';
    
    let resizeTimeout;
    
    function initOrgChart() {
        console.log('WP Org Chart plugin loaded with SVG lines');
        
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', drawOrgChartLines);
        } else {
            drawOrgChartLines();
        }
        
        // Redraw lines on window resize
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(drawOrgChartLines, 100);
        });
    }
    
    function drawOrgChartLines() {
        const orgChartWrapper = document.querySelector('.org-chart-wrapper');
        if (!orgChartWrapper) return;
        
        // Remove existing SVG if it exists
        const existingSvg = orgChartWrapper.querySelector('.org-chart-lines');
        if (existingSvg) {
            existingSvg.remove();
        }
        
        // Create SVG overlay
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'org-chart-lines');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.pointerEvents = 'none';
        svg.style.zIndex = '1';
        
        orgChartWrapper.appendChild(svg);
        
        // Get all levels
        const level1 = orgChartWrapper.querySelector('ul.level1');
        const level2 = orgChartWrapper.querySelector('ul.level2');
        const level3 = orgChartWrapper.querySelector('ul.departments');
        
        if (!level1 || !level2 || !level3) return;
        
        // Get wrapper bounds for coordinate calculation
        const wrapperRect = orgChartWrapper.getBoundingClientRect();
        
                // Draw connections from level 1 to level 2
                const level1Members = level1.querySelectorAll('li .member');
                const level2Member = level2.querySelector('li .member');
                
                if (level1Members.length > 0 && level2Member) {
                    const level2Rect = level2Member.getBoundingClientRect();
                    const level2Top = level2Rect.top - wrapperRect.top;
                    const level2Left = level2Rect.left - wrapperRect.left;
                    const level2CenterX = level2Left + (level2Rect.width / 2);
                    
                    // Draw horizontal line connecting level 1 members
                    if (level1Members.length > 1) {
                        const firstMemberRect = level1Members[0].getBoundingClientRect();
                        const lastMemberRect = level1Members[level1Members.length - 1].getBoundingClientRect();
                        
                        const lineStartX = firstMemberRect.left - wrapperRect.left + (firstMemberRect.width / 2);
                        const lineEndX = lastMemberRect.left - wrapperRect.left + (lastMemberRect.width / 2);
                        const lineY = firstMemberRect.bottom - wrapperRect.top + 20; // 20px below level 1
                        
                        const horizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        horizontalLine.setAttribute('x1', lineStartX);
                        horizontalLine.setAttribute('y1', lineY);
                        horizontalLine.setAttribute('x2', lineEndX);
                        horizontalLine.setAttribute('y2', lineY);
                        horizontalLine.setAttribute('stroke', '#000000');
                        horizontalLine.setAttribute('stroke-width', '2');
                        svg.appendChild(horizontalLine);
                    }
                    
                    // Draw vertical line from horizontal line to level 2
                    const firstMemberRect = level1Members[0].getBoundingClientRect();
                    const lineY = firstMemberRect.bottom - wrapperRect.top + 20; // Same Y as horizontal line
                    
                    const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    verticalLine.setAttribute('x1', level2CenterX);
                    verticalLine.setAttribute('y1', lineY);
                    verticalLine.setAttribute('x2', level2CenterX);
                    verticalLine.setAttribute('y2', level2Top);
                    verticalLine.setAttribute('stroke', '#000000');
                    verticalLine.setAttribute('stroke-width', '2');
                    svg.appendChild(verticalLine);
                    
                    // Draw vertical lines from horizontal line to each level 1 member
                    level1Members.forEach(member => {
                        const memberRect = member.getBoundingClientRect();
                        const memberBottom = memberRect.bottom - wrapperRect.top;
                        const memberCenterX = memberRect.left - wrapperRect.left + (memberRect.width / 2);
                        
                        const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        verticalLine.setAttribute('x1', memberCenterX);
                        verticalLine.setAttribute('y1', memberBottom);
                        verticalLine.setAttribute('x2', memberCenterX);
                        verticalLine.setAttribute('y2', lineY);
                        verticalLine.setAttribute('stroke', '#000000');
                        verticalLine.setAttribute('stroke-width', '2');
                        svg.appendChild(verticalLine);
                    });
                }
        
        // Draw connections from level 2 to level 3
        const level3Members = level3.querySelectorAll('li .member');
        
        if (level2Member && level3Members.length > 0) {
            const level2Rect = level2Member.getBoundingClientRect();
            const level2Bottom = level2Rect.bottom - wrapperRect.top;
            const level2CenterX = level2Rect.left - wrapperRect.left + (level2Rect.width / 2);
            
            // Draw horizontal line connecting level 3 members
            if (level3Members.length > 1) {
                const firstMemberRect = level3Members[0].getBoundingClientRect();
                const lastMemberRect = level3Members[level3Members.length - 1].getBoundingClientRect();
                
                const lineStartX = firstMemberRect.left - wrapperRect.left + (firstMemberRect.width / 2);
                const lineEndX = lastMemberRect.left - wrapperRect.left + (lastMemberRect.width / 2);
                const lineY = firstMemberRect.top - wrapperRect.top - 20; // 20px above level 3
                
                const horizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                horizontalLine.setAttribute('x1', lineStartX);
                horizontalLine.setAttribute('y1', lineY);
                horizontalLine.setAttribute('x2', lineEndX);
                horizontalLine.setAttribute('y2', lineY);
                horizontalLine.setAttribute('stroke', '#CE8948');
                horizontalLine.setAttribute('stroke-width', '2');
                svg.appendChild(horizontalLine);
            }
            
            // Draw vertical line from level 2 to level 3
            const firstLevel3Rect = level3Members[0].getBoundingClientRect();
            const level3Top = firstLevel3Rect.top - wrapperRect.top;
            
            const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            verticalLine.setAttribute('x1', level2CenterX);
            verticalLine.setAttribute('y1', level2Bottom);
            verticalLine.setAttribute('x2', level2CenterX);
            verticalLine.setAttribute('y2', level3Top);
            verticalLine.setAttribute('stroke', '#CE8948');
            verticalLine.setAttribute('stroke-width', '2');
            svg.appendChild(verticalLine);
            
            // Draw vertical lines from horizontal line to each level 3 member
            level3Members.forEach(member => {
                const memberRect = member.getBoundingClientRect();
                const memberTop = memberRect.top - wrapperRect.top;
                const memberCenterX = memberRect.left - wrapperRect.left + (memberRect.width / 2);
                
                const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                verticalLine.setAttribute('x1', memberCenterX);
                verticalLine.setAttribute('y1', level3Top - 20);
                verticalLine.setAttribute('x2', memberCenterX);
                verticalLine.setAttribute('y2', memberTop);
                verticalLine.setAttribute('stroke', '#CE8948');
                verticalLine.setAttribute('stroke-width', '2');
                svg.appendChild(verticalLine);
            });
        }
    }
    
    // Initialize when DOM is ready
    initOrgChart();
})();