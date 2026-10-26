  // DATA MENU SESUAI GAMBAR DAFTAR MENU RUMAH MAKAN RANIA (Dengan Properti isAvailable)
        const menuData = [
            // MAKANAN - Aneka Lalapan
            { id: 1, name: "Ayam Goreng Potong", price: 25000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80" },
            { id: 2, name: "Ayam Bakar Potong", price: 30000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80" },
            { id: 3, name: "Ayam Geprek Potong", price: 30000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80" },
            { id: 4, name: "Ayam Betutu Potong (kuah)", price: 30000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80" },
            { id: 5, name: "Ayam Goreng Kampung", price: 35000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80" },
            { id: 6, name: "Ayam Bakar Kampung", price: 40000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80" },
            { id: 7, name: "Ayam Geprek Kampung", price: 40000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80" },
            { id: 8, name: "Ayam Betutu Kampung (kuah)", price: 40000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80" },
            { id: 9, name: "Bebek Goreng", price: 40000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=400&q=80" },
            { id: 10, name: "Bebek Bakar", price: 45000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=400&q=80" },
            { id: 11, name: "Merpati Goreng", price: 40000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80" },
            { id: 12, name: "Merpati Bakar", price: 45000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80" },
            { id: 13, name: "Lalapan Paru", price: 30000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80" },
            { id: 14, name: "Lele Goreng", price: 20000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80" },
            { id: 15, name: "Lele Bakar", price: 25000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80" },
            { id: 16, name: "Tempe Penyet + Telur", price: 15000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80" },
            { id: 17, name: "Tempe Goreng", price: 10000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1601000938259-9e92002320b2?auto=format&fit=crop&w=400&q=80" },
            { id: 18, name: "Tahu Goreng", price: 10000, category: "Aneka Lalapan", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },

            // MAKANAN - Sop & Sayuran
            { id: 19, name: "Sop Iga", price: 50000, category: "Aneka Sop & Sayuran", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80" },
            { id: 20, name: "Sop Buntut", price: 50000, category: "Aneka Sop & Sayuran", type: "makanan", isAvailable: false, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80" },
            { id: 21, name: "Rawon", price: 30000, category: "Aneka Sop & Sayuran", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80" },
            { id: 22, name: "Cah Kangkung", price: 15000, category: "Aneka Sop & Sayuran", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80" },
            { id: 23, name: "Cap Cay", price: 25000, category: "Aneka Sop & Sayuran", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80" },

            // MAKANAN - Gurame & Udang
            { id: 24, name: "Gurame Bakar", price: 75000, category: "Aneka Gurame & Udang", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80" },
            { id: 25, name: "Gurame Asam Manis", price: 75000, category: "Aneka Gurame & Udang", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80" },
            { id: 26, name: "Gurame Rica-Rica", price: 75000, category: "Aneka Gurame & Udang", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80" },
            { id: 27, name: "Gurame Goreng", price: 70000, category: "Aneka Gurame & Udang", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80" },
            { id: 28, name: "Udang Goreng", price: 75000, category: "Aneka Gurame & Udang", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=400&q=80" },
            { id: 29, name: "Udang Asam Manis", price: 85000, category: "Aneka Gurame & Udang", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=400&q=80" },

            // MAKANAN - Nasi Goreng & Snack
            { id: 30, name: "Nasi Goreng Telur", price: 20000, category: "Nasi Goreng & Snack", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80" },
            { id: 31, name: "Nasi Goreng Sosis", price: 20000, category: "Nasi Goreng & Snack", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80" },
            { id: 32, name: "Nasi Goreng Seafood", price: 30000, category: "Nasi Goreng & Snack", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80" },
            { id: 33, name: "Kentang Goreng", price: 15000, category: "Nasi Goreng & Snack", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
            { id: 34, name: "Nugget", price: 15000, category: "Nasi Goreng & Snack", type: "makanan", isAvailable: true, image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80" },

            // MINUMAN - Aneka Minuman
            { id: 35, name: "Es Teh", price: 6000, category: "Aneka Minuman", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80" },
            { id: 36, name: "Teh Hangat", price: 6000, category: "Aneka Minuman", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80" },
            { id: 37, name: "Jeruk Hangat", price: 6000, category: "Aneka Minuman", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
            { id: 38, name: "Es Jeruk", price: 8000, category: "Aneka Minuman", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
            { id: 39, name: "Es Joshua", price: 15000, category: "Aneka Minuman", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" },
            { id: 40, name: "Es Kukubima Susu", price: 15000, category: "Aneka Minuman", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" },
            { id: 41, name: "Soda Gembira", price: 20000, category: "Aneka Minuman", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" },
            { id: 42, name: "Lemon Tea Anget", price: 12000, category: "Aneka Minuman", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80" },
            { id: 43, name: "Lemon Tea + Es", price: 15000, category: "Aneka Minuman", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80" },

            // MINUMAN - Aneka Juice
            { id: 44, name: "Jus Wortel", price: 10000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
            { id: 45, name: "Jus Tomat", price: 10000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80" },
            { id: 46, name: "Jus Alpukat", price: 15000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=400&q=80" },
            { id: 47, name: "Jus Semangka", price: 15000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=400&q=80" },
            { id: 48, name: "Jus Melon", price: 15000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
            { id: 49, name: "Jus Apel", price: 18000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
            { id: 50, name: "Jus Jambu", price: 15000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
            { id: 51, name: "Jus Nanas", price: 15000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
            { id: 52, name: "Jus Buah Naga", price: 15000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=400&q=80" },
            { id: 53, name: "Jus Lemon", price: 20000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
            { id: 54, name: "Orange Juice", price: 20000, category: "Aneka Juice", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },

            // MINUMAN - Aneka Kopi
            { id: 55, name: "Kopi Biasa", price: 6000, category: "Aneka Kopi", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" },
            { id: 56, name: "Kopi Jahe", price: 10000, category: "Aneka Kopi", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" },
            { id: 57, name: "Kopi Susu", price: 10000, category: "Aneka Kopi", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80" },
            { id: 58, name: "Kopi Capucino", price: 10000, category: "Aneka Kopi", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80" },
            { id: 59, name: "Kopi Capucino + Es", price: 15000, category: "Aneka Kopi", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
            { id: 60, name: "White Coffe", price: 10000, category: "Aneka Kopi", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80" },
            { id: 61, name: "White Coffe + Es", price: 15000, category: "Aneka Kopi", type: "minuman", isAvailable: true, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" }
        ];

        // Application State
        let cart = {};
        let activeCategory = "Semua";
        let hideOutOfStock = false;
        let qrcodeObj = null;

        // Initialize App
        window.onload = function() {
            renderCategories();
            renderMenu();
        };

        // Toggle Hide Out Of Stock
        function toggleHideOutOfStock() {
            hideOutOfStock = !hideOutOfStock;
            const btn = document.getElementById('toggleStockBtn');
            if(hideOutOfStock) {
                btn.classList.add('bg-gold-500/20', 'border-gold-500', 'text-gold-400');
            } else {
                btn.classList.remove('bg-gold-500/20', 'border-gold-500', 'text-gold-400');
            }
            renderMenu();
        }

        // Render Category Filter Buttons
        function renderCategories() {
            const categories = ["Semua", "Aneka Lalapan", "Aneka Sop & Sayuran", "Aneka Gurame & Udang", "Nasi Goreng & Snack", "Aneka Minuman", "Aneka Juice", "Aneka Kopi"];
            const container = document.getElementById('categoryContainer');
            
            container.innerHTML = categories.map(cat => `
                <button onclick="setCategory('${cat}')" 
                    class="px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                        activeCategory === cat 
                        ? 'bg-gold-500 text-dark-900 font-bold shadow-md shadow-gold-500/20' 
                        : 'bg-dark-800 text-gray-300 hover:bg-dark-700 border border-dark-600'
                    }">
                    ${cat}
                </button>
            `).join('');
        }

        // Set Category Filter
        function setCategory(cat) {
            activeCategory = cat;
            renderCategories();
            renderMenu();
        }

        // Filter Menu based on Search & Category
        function filterMenu() {
            renderMenu();
        }

        // Format Currency (IDR)
        function formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
        }

        // Render Menu Cards
        function renderMenu() {
            const searchVal = document.getElementById('searchInput').value.toLowerCase();
            const container = document.getElementById('menuContainer');
            
            let filtered = menuData.filter(item => {
                const matchCategory = activeCategory === "Semua" || item.category === activeCategory;
                const matchSearch = item.name.toLowerCase().includes(searchVal) || item.category.toLowerCase().includes(searchVal);
                const matchStock = !hideOutOfStock || item.isAvailable;
                return matchCategory && matchSearch && matchStock;
            });

            if(filtered.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-12 text-gray-500">
                        <i class="fa-solid fa-utensils text-4xl mb-3 opacity-30"></i>
                        <p class="text-sm">Menu tidak ditemukan.</p>
                    </div>
                `;
                return;
            }

            // Group by category
            const grouped = {};
            filtered.forEach(item => {
                if(!grouped[item.category]) grouped[item.category] = [];
                grouped[item.category].push(item);
            });

            let html = '';
            for(let cat in grouped) {
                html += `
                    <div>
                        <div class="flex items-center gap-2 mb-3 border-b border-dark-700 pb-2">
                            <span class="w-2 h-2 rounded-full bg-gold-500"></span>
                            <h2 class="font-title text-base font-bold text-gold-400 uppercase tracking-wide">${cat}</h2>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            ${grouped[cat].map(item => {
                                const qty = cart[item.id] ? cart[item.id].qty : 0;
                                const isAvailable = item.isAvailable;

                                return `
                                    <div class="bg-dark-800 border ${isAvailable ? 'border-dark-700 hover:border-gold-500/40' : 'border-red-900/40 opacity-75'} rounded-xl p-3 flex gap-3 items-center transition relative overflow-hidden">
                                        
                                        <!-- Stock Status Tag / Image Wrap -->
                                        <div class="relative w-16 h-16 flex-shrink-0">
                                            <img src="${item.image}" alt="${item.name}" class="w-full h-full rounded-lg object-cover bg-dark-700 border border-dark-600 ${!isAvailable ? 'grayscale opacity-60' : ''}" onerror="this.src='https://placehold.co/100x100/1c1e26/d4af37?text=Rania'">
                                            ${!isAvailable ? `
                                                <div class="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
                                                    <span class="text-[9px] font-bold text-red-400 uppercase tracking-tighter bg-red-950/80 px-1 rounded border border-red-800/50">Habis</span>
                                                </div>
                                            ` : ''}
                                        </div>

                                        <div class="flex-1 min-w-0 space-y-1">
                                            <div class="flex items-start justify-between gap-1">
                                                <h3 class="text-sm font-semibold ${isAvailable ? 'text-gray-100' : 'text-gray-400 line-through'} truncate">${item.name}</h3>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <p class="text-xs font-bold ${isAvailable ? 'text-gold-400' : 'text-gray-500'}">${formatRupiah(item.price)}</p>
                                                ${isAvailable ? `
                                                    <span class="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 flex items-center gap-0.5">
                                                        <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span> Tersedia
                                                    </span>
                                                ` : `
                                                    <span class="text-[10px] text-red-400 font-semibold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
                                                        Stok Habis
                                                    </span>
                                                `}
                                            </div>
                                        </div>

                                        <div class="flex-shrink-0">
                                            ${!isAvailable ? `
                                                <button disabled class="px-3 py-1.5 rounded-lg bg-dark-700 border border-dark-600 text-gray-500 text-xs font-semibold cursor-not-allowed">
                                                    Habis
                                                </button>
                                            ` : qty === 0 ? `
                                                <button onclick="addToCart(${item.id})" class="px-3 py-1.5 rounded-lg bg-dark-700 hover:bg-gold-500 hover:text-dark-900 border border-gold-500/40 text-gold-400 text-xs font-semibold transition flex items-center gap-1">
                                                    <i class="fa-solid fa-plus text-[10px]"></i> Tambah
                                                </button>
                                            ` : `
                                                <div class="flex items-center bg-dark-700 rounded-lg border border-gold-500/40 p-1 gap-2">
                                                    <button onclick="updateQty(${item.id}, -1)" class="w-6 h-6 rounded bg-dark-800 text-gold-400 font-bold text-xs flex items-center justify-center hover:bg-gold-500 hover:text-dark-900 transition">-</button>
                                                    <span class="text-xs font-bold text-white w-4 text-center">${qty}</span>
                                                    <button onclick="updateQty(${item.id}, 1)" class="w-6 h-6 rounded bg-dark-800 text-gold-400 font-bold text-xs flex items-center justify-center hover:bg-gold-500 hover:text-dark-900 transition">+</button>
                                                </div>
                                            `}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }

            container.innerHTML = html;
        }

        // Cart Logic
        function addToCart(id) {
            const item = menuData.find(m => m.id === id);
            if(!item || !item.isAvailable) return;

            if(cart[id]) {
                cart[id].qty++;
            } else {
                cart[id] = { ...item, qty: 1 };
            }
            showToast(`"${item.name}" ditambahkan`);
            updateCartUI();
            renderMenu();
        }

        function updateQty(id, delta) {
            if(!cart[id]) return;
            cart[id].qty += delta;
            if(cart[id].qty <= 0) {
                delete cart[id];
            }
            updateCartUI();
            renderMenu();
        }

        function updateCartUI() {
            let totalCount = 0;
            let totalPrice = 0;

            for(let id in cart) {
                totalCount += cart[id].qty;
                totalPrice += cart[id].price * cart[id].qty;
            }

            document.getElementById('cartCountBadge').innerText = totalCount;
            document.getElementById('cartTotalPrice').innerText = formatRupiah(totalPrice);
            document.getElementById('modalTotal').innerText = formatRupiah(totalPrice);

            const floatingCart = document.getElementById('floatingCart');
            if(totalCount > 0) {
                floatingCart.classList.remove('translate-y-full');
            } else {
                floatingCart.classList.add('translate-y-full');
                closeCartModal();
            }
        }

        // Modal Handles
        function openCartModal() {
            renderCartModalItems();
            const modal = document.getElementById('cartModal');
            modal.classList.remove('opacity-0', 'pointer-events-none');
        }

        function closeCartModal() {
            const modal = document.getElementById('cartModal');
            modal.classList.add('opacity-0', 'pointer-events-none');
        }

        function renderCartModalItems() {
            const container = document.getElementById('cartItemsContainer');
            let items = Object.values(cart);

            if(items.length === 0) {
                container.innerHTML = `<p class="text-xs text-gray-500 text-center py-4">Belum ada item dipilih.</p>`;
                return;
            }

            container.innerHTML = items.map(item => `
                <div class="flex justify-between items-center bg-dark-900/60 p-2.5 rounded-xl border border-dark-700">
                    <div>
                        <p class="text-xs font-semibold text-gray-200">${item.name}</p>
                        <p class="text-[11px] text-gold-400 font-medium">${formatRupiah(item.price)} x ${item.qty} = ${formatRupiah(item.price * item.qty)}</p>
                    </div>
                    <div class="flex items-center bg-dark-700 rounded-lg border border-dark-600 p-1 gap-2">
                        <button onclick="updateQty(${item.id}, -1); renderCartModalItems();" class="w-5 h-5 rounded bg-dark-800 text-gold-400 font-bold text-xs flex items-center justify-center">-</button>
                        <span class="text-xs font-bold text-white w-4 text-center">${item.qty}</span>
                        <button onclick="updateQty(${item.id}, 1); renderCartModalItems();" class="w-5 h-5 rounded bg-dark-800 text-gold-400 font-bold text-xs flex items-center justify-center">+</button>
                    </div>
                </div>
            `).join('');
        }

        // Generate Order & Barcode
        let currentOrderData = null;

        function generateOrderBarcode() {
            const table = document.getElementById('tableNumber').value;
            const name = document.getElementById('customerName').value.trim() || 'Pelanggan';
            const notes = document.getElementById('orderNotes').value.trim();

            if(!table) {
                alert("Silakan pilih Nomor Meja atau Bungkus terlebih dahulu!");
                return;
            }

            const items = Object.values(cart);
            if(items.length === 0) {
                alert("Keranjang belanja masih kosong!");
                return;
            }

            // Generate Order Code
            const orderCode = 'RN-' + Math.floor(1000 + Math.random() * 9000);
            let totalPrice = 0;
            items.forEach(i => totalPrice += (i.price * i.qty));

            currentOrderData = {
                code: orderCode,
                table: table,
                name: name,
                items: items,
                notes: notes,
                total: totalPrice,
                date: new Date().toLocaleString('id-ID')
            };

            // Display in Barcode Modal
            document.getElementById('resOrderCode').innerText = `#${orderCode}`;
            document.getElementById('resTable').innerText = table;
            document.getElementById('resName').innerText = name;
            document.getElementById('resTotal').innerText = formatRupiah(totalPrice);

            const itemListContainer = document.getElementById('resItemList');
            itemListContainer.innerHTML = items.map(i => `
                <div class="flex justify-between text-[11px]">
                    <span class="text-gray-300">${i.qty}x ${i.name}</span>
                    <span class="text-gray-400">${formatRupiah(i.price * i.qty)}</span>
                </div>
            `).join('');

            if(notes) {
                itemListContainer.innerHTML += `
                    <div class="text-[10px] text-amber-400/90 italic pt-1">Note: "${notes}"</div>
                `;
            }

            // Generate QR Code Content (JSON string for cashier system)
            const qrPayload = JSON.stringify({
                code: orderCode,
                table: table,
                name: name,
                total: totalPrice,
                items: items.map(i => `${i.qty}x ${i.name}`)
            });

            // Clear previous QR
            document.getElementById('qrcode').innerHTML = "";
            qrcodeObj = new QRCode(document.getElementById("qrcode"), {
                text: qrPayload,
                width: 180,
                height: 180,
                colorDark: "#0a0a0c",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });

            closeCartModal();
            const bModal = document.getElementById('barcodeModal');
            bModal.classList.remove('opacity-0', 'pointer-events-none');
        }

        function closeBarcodeModal() {
            const bModal = document.getElementById('barcodeModal');
            bModal.classList.add('opacity-0', 'pointer-events-none');
        }

        // Send via WhatsApp Option
        function sendToWhatsApp() {
            if(!currentOrderData) return;

            let text = `*PESANAN RUMAH MAKAN RANIA*\n`;
            text += `-----------------------------------\n`;
            text += `*Kode*: #${currentOrderData.code}\n`;
            text += `*Lokasi/Meja*: ${currentOrderData.table}\n`;
            text += `*Nama*: ${currentOrderData.name}\n`;
            text += `-----------------------------------\n`;
            text += `*Detail Pesanan*:\n`;
            
            currentOrderData.items.forEach(i => {
                text += `• ${i.qty}x ${i.name} (${formatRupiah(i.price * i.qty)})\n`;
            });

            if(currentOrderData.notes) {
                text += `\n*Catatan*: ${currentOrderData.notes}\n`;
            }

            text += `-----------------------------------\n`;
            text += `*TOTAL*: ${formatRupiah(currentOrderData.total)}\n`;
            text += `-----------------------------------\n`;
            text += `_Mohon segera diproses, Terima Kasih!_`;

            const encodedText = encodeURIComponent(text);
            const waNumber = "6283773756261"; // Nomor Kasir dari menu
            window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
        }

        function finishOrder() {
            cart = {};
            currentOrderData = null;
            document.getElementById('customerName').value = '';
            document.getElementById('orderNotes').value = '';
            document.getElementById('tableNumber').value = '';
            updateCartUI();
            renderMenu();
            closeBarcodeModal();
        }

        // Toast Helper
        function showToast(msg) {
            const toast = document.getElementById('toast');
            toast.innerText = msg;
            toast.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
            toast.classList.add('opacity-100', 'translate-y-0');

            setTimeout(() => {
                toast.classList.remove('opacity-100', 'translate-y-0');
                toast.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
            }, 2000);
        }
