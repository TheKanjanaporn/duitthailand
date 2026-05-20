// ==========================================
// PRODUCTS DATABASE (DUIT THAILAND)
// ข้อมูลจาก Cat Expo 2025 - Staff Manual
// 24 สินค้าทั้งหมด
// ==========================================
const PRODUCTS = [

    // ===== หน้า 1: อาหาร & น้ำ =====
    {
        id: "table_plus",
        category: "appliances",
        title:    { en: "The Table+",    th: "The Table+" },
        subtitle: { en: "Minimalist Smart Feeder", th: "เครื่องให้อาหารมินิมอลสไตล์" },
        badge:    { en: "Smart Tech",    th: "เทคโนโลยีอัจฉริยะ" },
        price: "7,490",
        image: "assets/table_plus.png",
        description: {
            en: "Minimalist smart automatic feeder. Connects to app, made from food-grade plastic — same quality as baby bottles.",
            th: "เครื่องให้อาหารอัตโนมัติสไตล์มินิมอล เชื่อมต่อแอพได้ วัสดุพลาสติกเกรดเดียวกับขวดนมเด็ก"
        },
        features: {
            en: ["Minimalist design", "App connectivity", "Food-grade plastic (same as baby bottles)"],
            th: ["มินิมอล", "เชื่อมแอพได้", "วัสดุทำจากพลาสติกเกรดเดียวกับขวดนมเด็ก"]
        }
    },
    {
        id: "daily_table",
        category: "appliances",
        title:    { en: "Daily Table",   th: "Daily Table" },
        subtitle: { en: "Elevated Food Bowl Stand", th: "ชามอาหารมินิมอล" },
        badge:    { en: "Popular",       th: "ยอดนิยม" },
        price: "2,590",
        image: "assets/daily_table.png",
        description: {
            en: "Minimalist elevated food bowl stand. 100% washable, reduces neck strain while eating.",
            th: "ชามอาหารพร้อมขาตั้งสไตล์มินิมอล ทำความสะอาดได้ 100% ช่วยให้สัตว์เลี้ยงไม่ต้องก้มจนเกินไปขณะกินอาหาร"
        },
        features: {
            en: ["100% washable", "Elevated bowl stand with legs", "Reduces neck strain while eating"],
            th: ["สามารถทำความสะอาดได้ 100%", "ชามอาหารพร้อมขาตั้ง", "ช่วยให้สัตว์เลี้ยงไม่ต้องก้มจนเกินไปขณะกินอาหาร"]
        }
    },
    {
        id: "wave_pot",
        category: "appliances",
        title:    { en: "Wave Pot",      th: "Wave Pot" },
        subtitle: { en: "Ceramic Water Fountain", th: "น้ำพุพร้อมระบบกรองน้ำชั้นเลิศ" },
        badge:    { en: "New",           th: "ใหม่" },
        price: "2,790",
        image: "assets/wave_pot.png",
        description: {
            en: "Premium ceramic water fountain with filtration. Wave-like flow encourages cats to drink more water. Silent operation.",
            th: "น้ำพุเซรามิกพร้อมระบบกรองน้ำชั้นเลิศ การไหลของน้ำเหมือนคลื่นช่วยกระตุ้นการดื่มน้ำ ไม่มีเสียงรบกวน"
        },
        features: {
            en: ["Made from ceramic material", "Wave-like water flow", "Encourages hydration", "Silent operation", "Easy assembly within minutes"],
            th: ["ตัววัสดุผลิตจากเซรามิก", "การไหลของน้ำเหมือนคลื่น", "ช่วยกระตุ้นการกินน้ำ", "ไม่มีเสียงดังรบกวน", "ประกอบง่ายภายในไม่กี่นาที"]
        }
    },
    {
        id: "water_pot",
        category: "appliances",
        title:    { en: "Water Pot",     th: "Water Pot" },
        subtitle: { en: "Premium Water Fountain", th: "น้ำพุระบบกรองน้ำชั้นเลิศ" },
        badge:    { en: "Premium",       th: "พรีเมียม" },
        price: "4,390",
        image: "assets/water_pot.png",
        description: {
            en: "Advanced water fountain with human-grade filtration. Easy to disassemble and clean. Completely silent.",
            th: "น้ำพุพร้อมระบบกรองน้ำเกรดเดียวกับคนดื่ม สามารถถอดทำความสะอาดได้ง่าย ไม่มีเสียงดังรบกวน"
        },
        features: {
            en: ["Human-grade water filtration", "Easy disassembly for cleaning", "Silent motor"],
            th: ["มาพร้อมระบบกรองน้ำเกรดเดียวกับคนดื่ม", "สามารถถอดทำความสะอาดได้", "ไม่มีเสียงดังรบกวน"]
        }
    },
    {
        id: "mouse_bot",
        category: "appliances",
        title:    { en: "Mouse Bot",     th: "Mouse Bot" },
        subtitle: { en: "Interactive AI Cat Toy",  th: "ของเล่นแมวเลียนแบบอัตโนมัติ" },
        badge:    { en: "Smart",         th: "อัจฉริยะ" },
        price: "1,490",
        image: "assets/mouse_bot.png",
        description: {
            en: "Smart interactive cat toy that mimics mouse movement. Auto-switches modes, stops automatically when not in use.",
            th: "ของเล่นแมวอัจฉริยะเลียนแบบการเคลื่อนที่ของหนู ปรับโหมดได้ หยุดอัตโนมัติเมื่อแมวไม่ได้เล่น"
        },
        features: {
            en: ["Adjustable movement modes", "No remote control needed", "Auto-stops when cat isn't playing"],
            th: ["สามารถปรับเปลี่ยนโหมดได้", "ไม่ต้องคอยบังคับ", "หากไม่ได้เล่นด้วย Mouse Bot จะหยุดอัตโนมัติ"]
        }
    },

    // ===== หน้า 2: ห้องน้ำแมว =====
    {
        id: "poopoo_2way",
        category: "appliances",
        title:    { en: "Poo Poo Box 2-Way",   th: "Poo Poo Box 2-Way" },
        subtitle: { en: "Dual-Entry Litter Box",th: "ห้องน้ำแมวแบบเข้าได้สองทาง" },
        badge:    { en: "Best Seller",          th: "ขายดี" },
        price: "2,990",
        image: "assets/poopoo_2way.png",
        description: {
            en: "Dual-entry litter box — enter from top or side. Excellent odor control while in use. Easy to clean.",
            th: "ห้องน้ำแมวเข้าได้สองทาง เก็บกลิ่นได้ดีขณะที่สัตว์เลี้ยงใช้งาน ทำความสะอาดง่าย"
        },
        features: {
            en: ["Dual-entry (top & side)", "Excellent odor control during use", "Easy to clean"],
            th: ["ห้องน้ำที่เข้าได้อย่างดีออกดี", "สามารถเข้าได้สองทาง", "เก็บกลิ่นได้ดีขณะที่สัตว์เลี้ยงใช้งาน"]
        }
    },
    {
        id: "poopoo_cube",
        category: "appliances",
        title:    { en: "Poo Poo Box (CUBE)",     th: "Poo Poo Box (CUBE)" },
        subtitle: { en: "Large Cube Litter Box",  th: "ห้องน้ำแมวขนาดใหญ่กว่าเดิม" },
        badge:    { en: "Spacious",               th: "กว้างขวาง" },
        price: "2,990",
        image: "assets/poopoo_cube.png",
        description: {
            en: "Large cube-shaped litter box. Easy to clean with no odor or bacteria buildup.",
            th: "ห้องน้ำแมวรูปทรงลูกบาศก์ขนาดใหญ่ ทำความสะอาดง่าย ไม่สะสมกลิ่นและแบคทีเรีย"
        },
        features: {
            en: ["Extra large size", "Easy to clean", "No odor or bacteria buildup"],
            th: ["มีขนาดใหญ่", "ทำความสะอาดง่าย", "ไม่สะสมกลิ่นและแบคทีเรีย"]
        }
    },
    {
        id: "poopoo_long",
        category: "appliances",
        title:    { en: "Poo Poo Box (LONG)",      th: "Poo Poo Box (LONG)" },
        subtitle: { en: "XL Long Litter Box",      th: "ห้องน้ำแมวขนาดใหญ่พิเศษ" },
        badge:    { en: "XL Size",                 th: "ไซส์ XL" },
        price: "3,490",
        image: "assets/poopoo_long.png",
        description: {
            en: "Extra-large long litter box specially sized for bigger cats. Easy to clean and odor-free.",
            th: "ห้องน้ำแมวยาวขนาดใหญ่พิเศษ เหมาะสำหรับแมวตัวใหญ่ ทำความสะอาดง่าย ไม่สะสมกลิ่น"
        },
        features: {
            en: ["Extra large special size", "Easy to clean", "No odor or bacteria"],
            th: ["ห้องน้ำที่มีขนาดใหญ่พิเศษ", "ทำความสะอาดง่าย", "ไม่สะสมกลิ่นและแบคทีเรีย"]
        }
    },
    {
        id: "peek_a_poo",
        category: "appliances",
        title:    { en: "Peek a Poo",            th: "Peek a Poo" },
        subtitle: { en: "Top-Entry Litter Box",  th: "ห้องน้ำสำหรับมองจากบน" },
        badge:    { en: "Odor Free",             th: "ไร้กลิ่น" },
        price: "2,390",
        image: "assets/peek_a_poo.png",
        description: {
            en: "Top-entry litter box. Easy to clean, dual handles for lifting, non-stick surface gentle on paws.",
            th: "ห้องน้ำแบบเปิดจากบน ทำความสะอาดง่าย มีที่จับสองด้าน พื้นผิวนุ่มไม่ทำให้เล็บสัตว์เลี้ยงติด"
        },
        features: {
            en: ["Easy to clean", "Dual handles for easy lifting", "Non-stick surface gentle on paws"],
            th: ["ทำความสะอาดง่าย", "มีที่จับสองด้านทำให้ยกได้ง่าย", "พื้นผิวนุ่มไม่ทำให้เล็บสัตว์เลี้ยงติด"]
        }
    },
    {
        id: "standing_board",
        category: "furniture",
        title:    { en: "Standing Board",          th: "Standing Board" },
        subtitle: { en: "Vertical Scratch Board",  th: "กระดานสำหรับลับเล็บ" },
        badge:    { en: "Durable",                 th: "ทนทาน" },
        price: "2,390",
        image: "assets/standing_board.png",
        description: {
            en: "Durable vertical scratch board. Helps cats fully stretch their body. No cardboard dust or mess.",
            th: "กระดานลับเล็บแบบตั้ง วัสดุแข็งแรงทนทาน ช่วยให้น้องแมวยืดตัวได้สุด ไม่มีเศษกระดาษหลุดเลอะเกอะ"
        },
        features: {
            en: ["Strong and durable material", "Helps cats stretch fully", "No cardboard dust or mess"],
            th: ["วัสดุแข็งแรงทนทาน ใช้ได้นาน", "ช่วยให้น้องแมวยืดตัวได้สุด", "ไม่มีเศษกระดาษหลุดเลอะเกอะ"]
        }
    },

    // ===== หน้า 3: เสื่อ, ตะกร้า & แผ่นลับเล็บ =====
    {
        id: "run_run_mat",
        category: "furniture",
        title:    { en: "Run Run Mat (M/L)",     th: "Run Run Mat (M/L)" },
        subtitle: { en: "Anti-slip Pet Mat",     th: "พรมกันลื่น ดักใยผ้าพิเศษ" },
        badge:    { en: "M / L Size",            th: "ไซส์ M / L" },
        price: "3,690 / 4,390",
        image: "assets/run_run_mat.png",
        description: {
            en: "Special fiber anti-slip pet mat. Waterproof & easy to clean. Claw-friendly with 5mm cushion to reduce noise.",
            th: "พรมกันลื่นดักใยผ้าพิเศษ กันน้ำและทำความสะอาดง่าย วัสดุเหมาะกับกรงเล็บ เบาะ 5 มม. ลดเสียงรบกวน"
        },
        features: {
            en: ["Waterproof & easy to clean", "Claw-friendly anti-slip material", "5mm cushion reduces noise"],
            th: ["กันน้ำและทำความสะอาดง่าย", "กันลื่น เหมาะสำหรับกรงเล็บ", "เบาะกันกระแทก 5 มม. ลดเสียงรบกวน"]
        }
    },
    {
        id: "all_day_basket",
        category: "furniture",
        title:    { en: "All Day Basket",       th: "All Day Basket" },
        subtitle: { en: "Large Cat Basket",     th: "คลอดแมวขนาดใหญ่" },
        badge:    { en: "Cozy",                 th: "อบอุ่น" },
        price: "2,990",
        image: "assets/all_day_basket.png",
        description: {
            en: "Large and spacious cat basket. Durable with thick premium material, perfect for all-day lounging.",
            th: "ตะกร้าแมวขนาดใหญ่ ทนทาน ใช้วัสดุหนาคุณภาพสูง เหมาะสำหรับนอนพักผ่อนทั้งวัน"
        },
        features: {
            en: ["Large size", "Durable thick premium material"],
            th: ["มีขนาดใหญ่", "ทนทาน ใช้วัสดุลักษณะแบบหนาที่สุด"]
        }
    },
    {
        id: "all_day_rack",
        category: "furniture",
        title:    { en: "All Day Rack",           th: "All Day Rack" },
        subtitle: { en: "Multi-Purpose Cat Shelf", th: "ชั้นวางของแมว" },
        badge:    { en: "Versatile",              th: "อเนกประสงค์" },
        price: "4,890",
        image: "assets/all_day_rack.png",
        description: {
            en: "Multi-purpose cat shelf with strong steel frame. Easy assembly, fits any location in your home.",
            th: "ชั้นวางของอเนกประสงค์ โครงเหล็กแข็งแรงและประกอบง่าย เข้าได้กับทุกสถานที่"
        },
        features: {
            en: ["Multiple usage configurations", "Strong steel frame & easy assembly", "Fits any location"],
            th: ["ใช้งานได้หลายรูปแบบ เปิดชั้นวางของ", "โครงเหล็กแข็งแรงและประกอบง่าย", "เข้าได้กับทุกสถานที่"]
        }
    },
    {
        id: "allday_board",
        category: "toys",
        title:    { en: "All-day Board",           th: "All-day Board" },
        subtitle: { en: "Ergonomic Curved Scratcher", th: "แผ่นลับเล็บแมว" },
        badge:    { en: "Ergonomic",              th: "เข้ากับสรีระ" },
        price: "1,990",
        image: "assets/allday_board.png",
        description: {
            en: "Curved scratch board ergonomically designed for cats. Easy to clean — dust stays in the center channel. Sturdy board, minimal cardboard dust.",
            th: "แผ่นลับเล็บโค้งมนเข้ากับสรีระแมว ทำความสะอาดง่าย เศษกระดาษสะอาดอยู่ตรงกลาง กระดาษแข็ง ผงน้อย"
        },
        features: {
            en: ["Ergonomic curve fits cat body", "Easy to clean – dust stays in center channel", "Sturdy board, minimal cardboard dust"],
            th: ["โค้งมนเข้ากับสรีระแมว", "ทำความสะอาดง่าย เศษกระดาษสะอาดอยู่ตรงกลาง", "กระดาษแข็ง ผงกระดาษน้อย"]
        }
    },
    {
        id: "peanut_board",
        category: "toys",
        title:    { en: "Peanut Board",              th: "Peanut Board" },
        subtitle: { en: "4-in-1 Multipurpose Scratcher", th: "บอร์ดลับเล็บแมว บำรุงสี่แขน" },
        badge:    { en: "4 in 1",                    th: "4 อิน 1" },
        price: "2,490",
        image: "assets/peanut_board.png",
        description: {
            en: "4-in-1 multipurpose scratch board. Use for sleeping and scratching. No cardboard dust or mess.",
            th: "ที่ลับเล็บอเนกประสงค์ 4 in 1 ใช้ได้ทั้งนอนและลับเล็บ ไม่มีเศษกระดาษหลุดเลอะเกอะ"
        },
        features: {
            en: ["4-in-1 multipurpose design", "Use for sleeping & scratching", "No cardboard dust or mess"],
            th: ["ที่ลับเล็บอเนกประสงค์ 4 in 1", "ใช้ได้กับนอนและลับเล็บ", "ไม่มีเศษกระดาษหลุดเลอะเกอะ"]
        }
    },

    // ===== หน้า 4: อุปกรณ์เสริม & ความปลอดภัย =====
    {
        id: "antibug_light",
        category: "appliances",
        title:    { en: "Anti-bug Light",              th: "Anti-bug Light" },
        subtitle: { en: "Natural Insect Repellent Light", th: "ไฟกันแมลง" },
        badge:    { en: "Natural",                     th: "ธรรมชาติ 100%" },
        price: "1,090",
        image: "assets/antibug_light.png",
        description: {
            en: "Protects your pets from insects naturally. Made from 100% natural herbs with a flashing night light for safe walks.",
            th: "ป้องกันสัตว์เลี้ยงจากแมลง ใช้สมุนไพรธรรมชาติ 100% มีไฟกะพริบสำหรับการเดินตอนกลางคืน"
        },
        features: {
            en: ["Protects pets from insects", "100% natural herbs", "Night flashing light for safe walking"],
            th: ["ป้องกันสัตว์เลี้ยงจากแมลงได้", "ใช้สมุนไพรธรรมชาติ 100%", "มีไฟกะพริบสำหรับการเดินตอนกลางคืน"]
        }
    },
    {
        id: "car_seat",
        category: "furniture",
        title:    { en: "Go Go Car Seat",              th: "Go Go Car Seat" },
        subtitle: { en: "Pet Car Travel Seat",         th: "ที่นั่งในรถยนต์ สำหรับการเดินทาง" },
        badge:    { en: "Travel",                      th: "เดินทาง" },
        price: "5,450",
        image: "assets/car_seat.png",
        description: {
            en: "Thick and durable pet car seat. Anti-bacterial material, 3-in-1 usage modes for comfortable travel.",
            th: "ที่นั่งในรถยนต์สำหรับสัตว์เลี้ยง หนาและทนทาน ไม่ฉีกขาด วัสดุต้านเชื้อแบคทีเรีย ใช้งานได้แบบ 3 in 1"
        },
        features: {
            en: ["Thick & durable — no tearing", "Anti-bacterial material", "3-in-1 usage modes"],
            th: ["หนาและทนทาน ไม่ฉีกขาด", "วัสดุต้านเชื้อแบคทีเรีย", "ใช้งานได้แบบ 3 in 1"]
        }
    },
    {
        id: "silicone_mat",
        category: "toys",
        title:    { en: "Silicone Mat",                th: "Silicone Mat" },
        subtitle: { en: "Food & Water Silicone Placemat", th: "แผ่นซิลิโคนรองอาหาร/น้ำ" },
        badge:    { en: "BPA Free",                    th: "ปลอด BPA" },
        price: "790",
        image: "assets/silicone_mat.png",
        description: {
            en: "Anti-slip waterproof silicone placemat. 1cm raised edge prevents liquid spills. BPA-free food-safe silicone.",
            th: "แผ่นซิลิโคนกันลื่นและกันน้ำ มีขอบสูง 1 ซม. ป้องกันของเหลวรั่วไหล วัสดุซิลิโคนปลอดสาร BPA"
        },
        features: {
            en: ["Anti-slip & waterproof", "1cm raised edge prevents spills", "BPA-free silicone"],
            th: ["กันลื่นและกันน้ำ", "มีขอบสูง 1 ซม. ป้องกันของเหลวรั่วไหล", "วัสดุซิลิโคนปลอดสาร BPA"]
        }
    },
    {
        id: "nonslip_mat",
        category: "toys",
        title:    { en: "Non-slip Silicone Mat",       th: "Non-slip Silicone Mat" },
        subtitle: { en: "Safety Floor Mat for Pets",   th: "แผ่นกันลื่นสำหรับน้องแมว" },
        badge:    { en: "Safety",                      th: "ปลอดภัย" },
        price: "2,350",
        image: "assets/nonslip_mat.png",
        description: {
            en: "Premium non-slip silicone floor mat for pets. Waterproof with BPA-free safe silicone material.",
            th: "แผ่นกันลื่นสำหรับน้องแมว กันลื่นและกันน้ำ วัสดุซิลิโคนปลอดภัย"
        },
        features: {
            en: ["Anti-slip & waterproof", "BPA-free safe silicone material"],
            th: ["กันลื่นและกันน้ำ", "วัสดุซิลิโคนปลอดภัย"]
        }
    },
    {
        id: "dry_mat",
        category: "toys",
        title:    { en: "Dry Mat",                     th: "Dry Mat" },
        subtitle: { en: "Diatomite Absorbent Mat",     th: "แผ่นรองซับน้ำ" },
        badge:    { en: "Quick Dry",                   th: "ซับน้ำเร็ว" },
        price: "990",
        image: "assets/dry_mat.png",
        description: {
            en: "Premium diatomite drying mat. Highly absorbent, ideal for placing under food and water bowls.",
            th: "แผ่นรองซับน้ำจากไดอะตอมไมต์ ซับซับดี เหมาะสำหรับวางชามอาหาร/น้ำ"
        },
        features: {
            en: ["Diatomite material", "Highly absorbent", "Ideal for food & water bowl placement"],
            th: ["ใช้วัสดุไดอะตอมไมต์", "ซับซับดี", "เหมาะสำหรับวางชามอาหาร/น้ำ"]
        }
    },

    // ===== หน้า 5: อ่างอาบน้ำ, แปรงขน & Catthenon =====
    {
        id: "floating_bath_tub",
        category: "toys",
        title:    { en: "Floating Bath Tub",           th: "Floating Bath Tub" },
        subtitle: { en: "Foldable Pet Bath Tub",       th: "อ่างอาบน้ำสำหรับสัตว์เลี้ยง" },
        badge:    { en: "Foldable",                    th: "พับได้" },
        price: "1,990",
        image: "assets/floating_bath_tub.png",
        description: {
            en: "Foldable pet bath tub to save space. Anti-slip material with strong structure for even weight distribution.",
            th: "อ่างอาบน้ำสำหรับสัตว์เลี้ยงที่พับเก็บได้ ประหยัดพื้นที่ วัสดุกันลื่น โครงสร้างแข็งแรงกระจายน้ำหนักดี"
        },
        features: {
            en: ["Foldable, space-saving design", "Anti-slip material", "Strong structure distributes weight evenly"],
            th: ["พับเก็บได้/ประหยัดพื้นที่", "วัสดุกันลื่น", "โครงสร้างแข็งแรงกระจายน้ำหนักดี"]
        }
    },
    {
        id: "banana_brush",
        category: "toys",
        title:    { en: "Banana Brush",                th: "Banana Brush" },
        subtitle: { en: "Natural Pet Grooming Brush",  th: "แปรงขนแมว" },
        badge:    { en: "Natural",                     th: "ธรรมชาติ" },
        price: "1,200",
        image: "assets/banana_brush.png",
        description: {
            en: "Gentle banana-shaped grooming brush. 100% natural bristles, specially designed for pets.",
            th: "แปรงขนแมวทรงกล้วย อ่อนโยน ไม่ระคายเคือง ขนแปรงธรรมชาติ 100% ออกแบบมาเพื่อสัตว์เลี้ยงโดยเฉพาะ"
        },
        features: {
            en: ["Gentle — non-irritating", "100% natural bristles", "Designed specifically for pets"],
            th: ["อ่อนโยน/ไม่ระคายเคือง", "ขนแปรงธรรมชาติ 100%", "ออกแบบมาเพื่อสัตว์เลี้ยงโดยเฉพาะ"]
        }
    },
    {
        id: "soft_brush",
        category: "toys",
        title:    { en: "Soft Brush",                  th: "Soft Brush" },
        subtitle: { en: "Self-Cleaning Grooming Brush", th: "แปรงขนนุ่มแมว" },
        badge:    { en: "Easy Clean",                  th: "ทำความสะอาดง่าย" },
        price: "1,090",
        image: "assets/soft_brush.png",
        description: {
            en: "Ultra-soft grooming brush with self-cleaning button. Easy grip, press button to remove collected fur effortlessly.",
            th: "แปรงขนนุ่มนวลพร้อมปุ่มกำจัดขน จับง่าย กดปุ่มเพื่อกำจัดขนหลังใช้งาน"
        },
        features: {
            en: ["Ultra-soft bristles", "Easy grip handle", "Self-cleaning button removes fur"],
            th: ["แปรงนุ่มนวล", "จับง่าย", "มีปุ่ม กำจัดขนหลังใช้งาน"]
        }
    },
    {
        id: "catthenon",
        category: "furniture",
        title:    { en: "Catthenon",                   th: "Catthenon" },
        subtitle: { en: "Premium Cat Scratcher Tower", th: "ที่ลับเล็บแมว" },
        badge:    { en: "Premium",                     th: "พรีเมียม" },
        price: "3,190",
        image: "assets/catthenon.png",
        description: {
            en: "Premium Catthenon cat scratcher with strong, stable structure. Paper rope material — odorless and minimal dust. Easy assembly.",
            th: "ที่ลับเล็บแมวพรีเมียม Catthenon โครงสร้างแข็งแรง มั่นคง วัสดุเชือกกระดาษ ไร้กลิ่น/ฝุ่นน้อย ประกอบง่าย"
        },
        features: {
            en: ["Strong, stable structure", "Paper rope material — odorless & minimal dust", "Easy assembly"],
            th: ["โครงสร้างแข็งแรง มั่นคง", "วัสดุเชือกกระดาษ ไร้กลิ่น/ฝุ่นน้อย", "ประกอบง่าย"]
        }
    }

];

// ==========================================
// STATE VARIABLES
// ==========================================
let currentCategory = "all";
let searchQuery = "";
let currentSlide = 0;
let slideInterval;
let currentLanguage = localStorage.getItem("duit_lang") || "th";

// ==========================================
// CORE INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Apply saved language on load
    applyLanguage();

    // Load products
    renderProducts();

    // Set up Hero Slider
    initSlider();

    // Setup navigation clicks to close menu on mobile
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const navLinks = document.getElementById("navLinks");
            if (navLinks.classList.contains("open")) {
                toggleMenu();
            }
        });
    });

    // Check if user already claimed a coupon in this session
    checkExistingCoupon();
});

// ==========================================
// LANGUAGE TOGGLE SYSTEM
// ==========================================
function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "th" : "en";
    localStorage.setItem("duit_lang", currentLanguage);
    applyLanguage();
    renderProducts();
}

function applyLanguage() {
    const lang = currentLanguage;
    const langBtnText = document.getElementById("langBtnText");
    if (langBtnText) {
        langBtnText.textContent = lang === "th" ? "EN" : "TH";
    }

    // Update all static elements with data-en / data-th attributes
    document.querySelectorAll("[data-en]").forEach(el => {
        const enText = el.getAttribute("data-en");
        const thText = el.getAttribute("data-th");
        if (lang === "th" && thText) {
            el.innerHTML = thText;
        } else if (enText) {
            el.innerHTML = enText;
        }
    });

    // Update search input placeholder
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.placeholder = lang === "th" ? "ค้นหาสินค้า..." : "Search products...";
    }
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
    const menuBtn = document.getElementById("menuBtn");

    const isOpen = navLinks.classList.contains("open");

    if (isOpen) {
        navLinks.classList.remove("open");
        mobileMenuOverlay.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        navLinks.classList.add("open");
        mobileMenuOverlay.classList.add("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
}

// ==========================================
// HERO SLIDER LOGIC
// ==========================================
function initSlider() {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.getElementById("sliderDots");

    // Clear and build dots
    dotsContainer.innerHTML = "";
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Start auto slide
    startSlideTimer();
}

function startSlideTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 6000);
}

function updateSlides() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
    startSlideTimer();
}

function prevSlide() {
    const slides = document.querySelectorAll(".slide");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
    startSlideTimer();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
    startSlideTimer();
}

// ==========================================
// CATALOG RENDERING & FILTERING
// ==========================================
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = "";
    const lang = currentLanguage;

    // Filter array
    const filtered = PRODUCTS.filter(p => {
        const matchesCategory = currentCategory === "all" || p.category === currentCategory;
        const titleText  = (p.title[lang]    || p.title.en).toLowerCase();
        const subText    = (p.subtitle[lang] || p.subtitle.en).toLowerCase();
        const q = searchQuery.toLowerCase();
        const matchesSearch = titleText.includes(q) || subText.includes(q) || p.category.includes(q);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        const noMsg = lang === "th"
            ? `ไม่พบสินค้าที่ค้นหา "${searchQuery}"`
            : `No products found matching "${searchQuery}"`;
        const resetLabel = lang === "th" ? "ล้างการค้นหา" : "Reset Search";
        grid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>${noMsg}</p>
                <button onclick="resetFilters()" class="btn-secondary-outline" style="margin-top: 1rem;">${resetLabel}</button>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("onclick", `openModal('${p.id}')`);

        const title    = p.title[lang]    || p.title.en;
        const subtitle = p.subtitle[lang] || p.subtitle.en;
        const badge    = p.badge[lang]    || p.badge.en;
        const priceLabel   = `฿${p.price}`;
        const detailsLabel = lang === "th" ? "รายละเอียด" : "Details";

        card.innerHTML = `
            <div class="product-image-wrap">
                <span class="product-badge">${badge}</span>
                <img src="${p.image}" alt="${title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${title}</h3>
                <div class="product-meta">
                    <span>${subtitle}</span>
                </div>
                <div class="product-price">
                    <span>${priceLabel}</span>
                    <button class="btn-details">${detailsLabel} <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category) {
    currentCategory = category;

    // Update active class using data-category attribute
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        if (tab.dataset.category === category) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    renderProducts();

    // Auto scroll down to grid on mobile
    if (window.innerWidth < 768) {
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    }
}

function handleSearch() {
    searchQuery = document.getElementById("searchInput").value;
    renderProducts();
}

function resetFilters() {
    document.getElementById("searchInput").value = "";
    searchQuery = "";
    currentCategory = "all";

    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        if (tab.dataset.category === "all") {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    renderProducts();
}

// ==========================================
// DETAILS MODAL DIALOG
// ==========================================
function openModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const lang = currentLanguage;
    const modal = document.getElementById("productModal");
    const gridContent = document.getElementById("modalGridContent");

    const title       = product.title[lang]       || product.title.en;
    const subtitle    = product.subtitle[lang]    || product.subtitle.en;
    const badge       = product.badge[lang]       || product.badge.en;
    const description = product.description[lang] || product.description.en;
    const features    = product.features[lang]    || product.features.en;
    const priceLabel  = `฿${product.price}`;
    const currency    = lang === "th" ? "บาท" : "THB";
    const featuresLabel = lang === "th" ? "จุดเด่นสินค้า" : "Product Highlights";
    const orderLabel  = lang === "th" ? "สั่งซื้อผ่าน LINE" : "Order via LINE";
    const closeLabel  = lang === "th" ? "ปิด" : "Close";

    const featuresHtml = features.map(f =>
        `<li><i class="fa-solid fa-circle-check" style="color:var(--color-accent); margin-right: 0.5rem;"></i> ${f}</li>`
    ).join("");

    gridContent.innerHTML = `
        <div class="modal-visual">
            <img src="${product.image}" alt="${title}">
        </div>
        <div class="modal-body">
            <span class="product-badge">${badge}</span>
            <h3>${title}</h3>
            <p class="modal-subtitle" style="color: var(--color-text-muted); margin-bottom: 0.5rem; font-size: 0.9rem;">${subtitle}</p>
            <p class="modal-price">${priceLabel} <span style="font-size:0.8rem; font-weight:400;">${currency}</span></p>
            <p class="modal-desc">${description}</p>

            <div class="spec-list">
                <div class="spec-item">
                    <span class="spec-label">${featuresLabel}</span>
                </div>
            </div>

            <ul style="list-style: none; padding: 0; margin-bottom: 2rem; font-size: 0.85rem; color: var(--color-text-muted);">
                ${featuresHtml}
            </ul>

            <div class="modal-actions">
                <a href="https://line.me/R/ti/p/@duit_thailand" target="_blank" class="btn-primary">
                    <i class="fa-brands fa-line"></i> ${orderLabel}
                </a>
                <button onclick="closeModal()" class="btn-secondary">${closeLabel}</button>
            </div>
        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("productModal");
    modal.style.display = "none";
    document.body.style.overflow = "";
}

// Close modal when clicking outside content container
window.addEventListener("click", (e) => {
    const modal = document.getElementById("productModal");
    const staffModal = document.getElementById("staffModal");
    if (e.target === modal) {
        closeModal();
    }
    if (e.target === staffModal) {
        closeStaffPortal();
    }
});

// ==========================================
// EVENT LEAD CAPTURE & COUPON GENERATION
// ==========================================
function generateCoupon(event) {
    event.preventDefault();

    const name  = document.getElementById("userName").value;
    const phone = document.getElementById("userPhone").value;
    const line  = document.getElementById("userLine").value;

    // Generate unique code suffix
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const promoCode = `DUIT-EVENT-${randomSuffix}`;

    // Store in local storage
    const newLead = {
        name: name,
        phone: phone,
        line: line,
        code: promoCode,
        timestamp: new Date().toLocaleString()
    };

    let leads = JSON.parse(localStorage.getItem("duit_leads")) || [];
    leads.push(newLead);
    localStorage.setItem("duit_leads", JSON.stringify(leads));

    // Also store coupon session
    localStorage.setItem("claimed_coupon", JSON.stringify(newLead));

    // Show Voucher View
    showVoucher(newLead);
}

function showVoucher(lead) {
    document.getElementById("couponForm").style.display = "none";
    document.getElementById("couponResult").style.display = "block";

    document.getElementById("voucherName").textContent = lead.name;
    document.getElementById("voucherCode").textContent = lead.code;
}

function resetCouponForm() {
    localStorage.removeItem("claimed_coupon");
    document.getElementById("couponResult").style.display = "none";
    document.getElementById("couponForm").style.display = "block";
    document.getElementById("couponForm").reset();
}

function checkExistingCoupon() {
    const saved = localStorage.getItem("claimed_coupon");
    if (saved) {
        const lead = JSON.parse(saved);
        showVoucher(lead);
    }
}

function copyVoucherCode() {
    const codeText = document.getElementById("voucherCode").textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.querySelector(".copy-code-btn");
        btn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--color-success)"></i>';
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 2000);
    }).catch(err => {
        console.error("Clipboard write failed", err);
    });
}

// ==========================================
// STAFF LEADS PORTAL LOGIC
// ==========================================
function openStaffPortal() {
    document.getElementById("staffModal").style.display = "flex";
    document.getElementById("staffPin").value = "";
    document.getElementById("pinError").style.display = "none";
    document.getElementById("pinSection").style.display = "block";
    document.getElementById("leadsSection").style.display = "none";
    document.body.style.overflow = "hidden";
}

function closeStaffPortal() {
    document.getElementById("staffModal").style.display = "none";
    document.body.style.overflow = "";
}

function verifyPin() {
    const pin = document.getElementById("staffPin").value;
    if (pin === "1234") {
        document.getElementById("pinSection").style.display = "none";
        document.getElementById("leadsSection").style.display = "block";
        renderLeadsTable();
    } else {
        document.getElementById("pinError").style.display = "block";
    }
}

function renderLeadsTable() {
    const tbody = document.getElementById("leadsTableBody");
    tbody.innerHTML = "";

    const leads = JSON.parse(localStorage.getItem("duit_leads")) || [];

    if (leads.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--color-text-muted);">No leads captured yet.</td></tr>`;
        return;
    }

    leads.reverse().forEach(lead => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${escapeHTML(lead.name)}</strong></td>
            <td>${escapeHTML(lead.phone)}</td>
            <td>${escapeHTML(lead.line)}</td>
            <td><code style="background-color: var(--color-accent-light); padding: 0.15rem 0.4rem; border-radius: 3px;">${escapeHTML(lead.code)}</code></td>
            <td>${escapeHTML(lead.timestamp)}</td>
        `;
        tbody.appendChild(tr);
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function clearLeads() {
    if (confirm("Are you sure you want to permanently clear ALL captured lead records? This cannot be undone.")) {
        localStorage.removeItem("duit_leads");
        localStorage.removeItem("claimed_coupon");
        renderLeadsTable();
        alert("All leads have been cleared.");
    }
}

function exportLeads() {
    const leads = JSON.parse(localStorage.getItem("duit_leads")) || [];
    if (leads.length === 0) {
        alert("No leads available to export.");
        return;
    }

    // Build CSV Content
    let csvContent = "\uFEFF"; // Add BOM for Excel Thai language support
    csvContent += "Name,Mobile Number,LINE ID,Promo Code,Registration Date\n";

    leads.forEach(lead => {
        const name  = `"${lead.name.replace(/"/g, '""')}"`;
        const phone = `"${lead.phone.replace(/"/g, '""')}"`;
        const line  = `"${lead.line.replace(/"/g, '""')}"`;
        const code  = `"${lead.code.replace(/"/g, '""')}"`;
        const time  = `"${lead.timestamp.replace(/"/g, '""')}"`;
        csvContent += `${name},${phone},${line},${code},${time}\n`;
    });

    // Create Download Link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `DUIT_Leads_Export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
