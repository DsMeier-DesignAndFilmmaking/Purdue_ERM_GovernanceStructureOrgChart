# WP Org Chart Plugin

A professional WordPress plugin for displaying organizational charts with dynamic SVG connecting lines.

## Features

- **Dynamic SVG Lines**: Responsive connecting lines that adapt to any screen size
- **Three-Level Structure**: Top executives, middle management, and departments
- **Professional Design**: Custom color scheme with Acumin Pro font family
- **Responsive Layout**: Bootstrap grid system for all devices
- **Easy Integration**: Simple shortcode `[org_chart]` for any page or post

## Installation

### Method 1: Manual Installation
1. Download the plugin files
2. Upload the `wp-org-chart-plugin` folder to `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Use the shortcode `[org_chart]` in any page or post

### Method 2: WordPress Admin Upload
1. Go to WordPress Admin → Plugins → Add New
2. Click "Upload Plugin"
3. Upload the plugin zip file
4. Activate the plugin
5. Use shortcode `[org_chart]` in any page or post

## Usage

Simply add the shortcode to any page or post:

```
[org_chart]
```

## Customization

The plugin includes:
- **CSS**: `css/org-chart.css` - Custom styling and colors
- **JavaScript**: `js/org-chart.js` - Dynamic line drawing
- **Templates**: `templates/org-chart-template.php` - Custom template overrides

## Organizational Structure

The plugin displays a three-level organizational chart:

**Top Level:**
- Executive Vice President & Treasurer
- Board of Trustees

**Middle Level:**
- Madina Sabirova - Chief Audit and Risk Officer

**Bottom Level:**
- Internal Audit
- Enterprise Risk Management
- Operational Resilience

## Technical Details

- **WordPress Version**: 5.0+
- **PHP Version**: 7.4+
- **Dependencies**: Bootstrap 3.3.7 (included)
- **Browser Support**: Modern browsers with SVG support

## Support

For support and customization requests, please contact the development team.

## License

GPL v2 or later
