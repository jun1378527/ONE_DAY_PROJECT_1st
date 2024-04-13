body {
    margin: 0;
    font-family: Arial, sans-serif;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 10px 50px;
}

.logo {
    font-size: 24px;
}

nav a {
    margin-left: 20px;
    text-decoration: none;
    color: #333;
}

.banner {
    width: 100%;
    height: 300px;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
}

.product-card {
    height: 300px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
}

@media (max-width: 1920px) {
    header, .banner, .product-grid, footer {
        width: 100%;
    }
}
