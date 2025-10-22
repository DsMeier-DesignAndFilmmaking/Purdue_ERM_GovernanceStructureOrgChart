<?php
/**
 * Plugin Name: WP Org Chart
 * Plugin URI: https://your-website.com
 * Description: A WordPress plugin to display organizational charts with dynamic SVG connecting lines.
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wp-org-chart
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('WP_ORG_CHART_VERSION', '1.0.0');
define('WP_ORG_CHART_PLUGIN_URL', plugin_dir_url(__FILE__));
define('WP_ORG_CHART_PLUGIN_PATH', plugin_dir_path(__FILE__));

/**
 * Enqueue plugin styles and scripts
 */
function wp_org_chart_enqueue_assets() {
    wp_enqueue_style(
        'wp-org-chart-css',
        WP_ORG_CHART_PLUGIN_URL . 'css/org-chart.css',
        array(),
        WP_ORG_CHART_VERSION
    );
    
    wp_enqueue_script(
        'wp-org-chart-js',
        WP_ORG_CHART_PLUGIN_URL . 'js/org-chart.js',
        array(),
        WP_ORG_CHART_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'wp_org_chart_enqueue_assets');

/**
 * Shortcode to display the org chart
 * Usage: [org_chart]
 */
function wp_org_chart_shortcode($atts) {
    // Parse shortcode attributes
    $atts = shortcode_atts(array(
        'title' => 'Organization Chart'
    ), $atts);
    
    // Start output buffering
    ob_start();
    ?>
    <div class="org-chart-wrapper" style="position: relative;">
        <div class="row">
            <div class="col-xs-12">
               <figure class="org-chart">
                <div class="board">
                  <ul class="col-xs-12 level1">
                        <li class="col-xs-6">
                          <div class="member">
                            <div class="info"><h5>Executive Vice President & Treasurer</h5></div>
                          </div>  
                        </li>
                        <li class="col-xs-6">
                          <div class="member">
                            <div class="info"><h5>Board of Trustees</h5></div>
                          </div>  
                        </li>
                  </ul>
                  <ul class="col-xs-12 level2">
                        <li class="col-xs-4 col-xs-push-4">
                          <div class="member">
                            <div class="info"><h5>Madina Sabirova</h5><h6>Chief Audit and Risk Officer</h6></div>
                          </div>  
                        </li>
                  </ul>
                  <ul class="departments level3">
                    <li class="col-xs-4">
                      <div class="member">
                        <div class="info col-xs-12"><h5>Internal Audit</h5></div>
                      </div>  
                    </li>
                    <li class="col-xs-4">
                      <div class="member">
                        <div class="info col-xs-12"><h5>Enterprise Risk Management</h5></div>
                      </div>  
                    </li>
                    <li class="col-xs-4">
                      <div class="member">
                        <div class="info col-xs-12"><h5>Operational Resilience</h5></div>
                      </div>  
                    </li>
                  </ul>
                  <ul class="programs level4">
                    <li class="col-xs-4">
                      <div class="member">
                        <div class="info col-xs-12">
                          <h5>Internal Audit Programs</h5>
                          <ul class="program-list">
                            <li>Risk-based Operations / IT / Compliance Audits</li>
                            <li>University Hotline and Investigations</li>
                            <li>Fraud Risk Management Program</li>
                            <li>IT General Controls Program</li>
                          </ul>
                        </div>
                      </div>  
                    </li>
                    <li class="col-xs-4">
                      <div class="member">
                        <div class="info col-xs-12">
                          <h5>Enterprise Risk Management Programs</h5>
                          <ul class="program-list">
                            <li>Enterprise Risk Management Program</li>
                          </ul>
                        </div>
                      </div>  
                    </li>
                    <li class="col-xs-4">
                      <div class="member">
                        <div class="info col-xs-12">
                          <h5>Operational Resilience Programs</h5>
                          <ul class="program-list">
                            <li>International Standards Organization (ISO) Program</li>
                            <li>Business Continuity Management Program</li>
                          </ul>
                        </div>
                      </div>  
                    </li>
                  </ul>
                  <ul class="programs level4">
                    <li class="col-xs-4">
                      <div class="member">
                        <div class="info col-xs-12">
                          <h5>Internal Audit Programs</h5>
                          <ul class="program-list">
                            <li>Risk-based Operations / IT / Compliance Audits</li>
                            <li>University Hotline and Investigations</li>
                            <li>Fraud Risk Management Program</li>
                            <li>IT General Controls Program</li>
                          </ul>
                        </div>
                      </div>  
                    </li>
                    <li class="col-xs-4">
                      <div class="member">
                        <div class="info col-xs-12">
                          <h5>Enterprise Risk Management Programs</h5>
                          <ul class="program-list">
                            <li>Enterprise Risk Management Program</li>
                          </ul>
                        </div>
                      </div>  
                    </li>
                    <li class="col-xs-4">
                      <div class="member">
                        <div class="info col-xs-12">
                          <h5>Operational Resilience Programs</h5>
                          <ul class="program-list">
                            <li>International Standards Organization (ISO) Program</li>
                            <li>Business Continuity Management Program</li>
                          </ul>
                        </div>
                      </div>  
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('org_chart', 'wp_org_chart_shortcode');

/**
 * Plugin activation hook
 */
function wp_org_chart_activate() {
    // Add any activation tasks here
}
register_activation_hook(__FILE__, 'wp_org_chart_activate');

/**
 * Plugin deactivation hook
 */
function wp_org_chart_deactivate() {
    // Add any deactivation tasks here
}
register_deactivation_hook(__FILE__, 'wp_org_chart_deactivate');