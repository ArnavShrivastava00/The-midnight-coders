// GSAP Animation for Loading Screen
const loadingScreen = document.getElementById('loading-screen');
if (loadingScreen) {
  gsap.to(loadingScreen, {
    opacity: 0,
    duration: 1.5,
    onComplete: () => (loadingScreen.style.display = 'none'),
  });
}

// Smooth Scrolling using LocomotiveScroll
const scrollContainer = document.querySelector('body');
if (scrollContainer) {
  const scroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
  });
}

// GSAP Animations for Sections
document.querySelectorAll('.section').forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
});

// Blog Slider Initialization (Horizontal Scroll)
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30, // Space between slides
    slidesPerView: 'auto', // Allow slides to adjust according to content
    loop: true, // Enable infinite loop
    mousewheel: true, // Enable scrolling using the mouse wheel
    grabCursor: true, // Enable grabbing cursor on hover

    // Disable pagination (as we no longer want dots)
    pagination: {
      el: '.swiper-pagination',
      clickable: false, // Disabling the clickable dots
    },
  });

  // Prevent browser scroll while interacting with the swiper
  const swiperContainer = document.querySelector('.swiper-container');
  swiperContainer.addEventListener('wheel', (e) => {
    if (swiperContainer.contains(e.target)) {
      e.preventDefault(); // Prevent default scroll behavior
      swiper.mousewheel.handle(e); // Handle mousewheel event in swiper
    }
  });
});
// Function to toggle the expanded view of the blog posts
function toggleExpand(blogId) {
    // Get the blog content and button by blog ID
    const content = document.getElementById(expanded-content-$,{blogId});
    const readMoreButton = document.getElementById(read-more-btn-$,{blogId});

    // Get the current style of the content (for checking expansion state)
    const isExpanded = content.style.display === 'block';

    // Toggle the display and width for expansion and minimization
    if (isExpanded) {
        // Minimize the content and reset the width
        content.style.display = 'none';
        content.style.width = '100%';  // Reset to original width
        readMoreButton.textContent = "Read More";  // Change button text
    } else {
        // Expand the content and set the width to 80%
        content.style.display = 'block';
        content.style.width = '80%';  // Set expanded width
        readMoreButton.textContent = "Minimize";  // Change button text
    }

    // Smooth transition for width change
    content.style.transition = 'width 0.5s ease';  // Smooth width change
}

// Event listener to handle hiding the loading screen when the page has loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the loading screen element
    const loadingScreen = document.getElementById("loading-screen");

    // Hide the loading screen once the DOM is fully loaded
    loadingScreen.style.display = "none";
    
    // Add content for expanded blogs on initial load
    const blogData = {
        1: "The Governor of the Reserve Bank of India (RBI), Shaktikanta Das, recently raised alarms about the potential risks artificial intelligence (AI) poses to financial stability. As AI and machine learning continue to become more prevalent in sectors such as banking, investment, and credit assessments, the RBI has emphasized the importance of addressing these emerging risks. While AI technologies can provide remarkable efficiencies, enhance decision-making processes, and improve customer experiences, they also bring new challenges to the financial ecosystem. Das expressed concerns that the increasing reliance on automated systems could result in systemic risks, especially if these AI models become opaque or unregulated. He pointed out that AI’s unpredictable nature, combined with its vast processing capabilities, may lead to unforeseen consequences like market volatility, biased lending practices, or even financial frauds that are harder to detect by traditional means. Moreover, AI's capability to analyze large datasets quickly could outpace the ability of financial regulators to keep up with technological advancements. This makes it essential for financial institutions to adopt stringent risk management strategies when integrating AI into their operations. To mitigate these risks, the RBI is working on formulating a robust regulatory framework that can manage AI's potential for both growth and harm. The framework will focus on enhancing transparency, ensuring ethical use of AI, and preventing market manipulation. Furthermore, the RBI has urged banks and financial institutions to invest in AI literacy and staff training to ensure their teams are equipped to understand and oversee AI applications. Regulatory bodies across the world have been grappling with how best to deal with the fast-paced rise of AI, and the RBI’s warning is a timely reminder of the need for international collaboration in creating unified standards for AI use in financial markets. India is also exploring how AI can boost financial inclusion, particularly in underserved areas, by offering affordable financial services through automation. However, balancing these innovations with sufficient regulatory oversight will be key to ensuring that AI remains a force for good in the financial sector without undermining stability.",
        
        2: "Brazil’s government has proposed new reforms aimed at tightening antitrust regulations to prevent monopolistic practices by large technology firms. The Ministry of Finance in Brazil introduced the proposal after growing concerns that tech giants, such as Google, Facebook, and Amazon, were exerting too much control over local markets, reducing competition and negatively impacting smaller businesses. These new antitrust measures focus on providing regulators with more robust tools to investigate and penalize unfair business practices, particularly in the digital space. Brazil’s antitrust authorities have been increasing scrutiny over the years as big tech companies have continued to dominate key sectors, from e-commerce to social media. The government’s focus is on preventing market manipulation and ensuring that digital platforms do not engage in practices like price-fixing, restricting competition, or abusing their dominant positions to squeeze out smaller competitors. The proposed legislation will allow regulators to impose stronger fines and sanctions on companies that breach these new rules, while also giving consumers more power to challenge anti-competitive practices. With the rapid growth of digital commerce in Brazil and the wider Latin American region, there has been an increasing need to address the uneven playing field that tech giants have created. The proposed regulations aim to promote fairer competition by regulating how digital platforms interact with users, advertisers, and smaller businesses. Additionally, the reforms will mandate more transparency in how these platforms collect and use personal data, ensuring that users have more control over their digital footprints. These changes are expected to align Brazil’s policies with other international efforts to regulate big tech companies, like the European Union’s Digital Markets Act and the United States' antitrust investigations. The proposed antitrust laws also come as part of a broader movement in Latin America to strengthen regulatory frameworks around tech companies, ensuring that innovation does not come at the cost of market fairness. The bill is currently under review and will undergo several rounds of deliberations before it is formally passed into law.",

        3: "VanEck, a leading investment management firm, has announced that it is launching a $30 million fund to invest in cryptocurrency, blockchain, and artificial intelligence (AI) startups. The move signals the firm’s strong commitment to supporting the development of cutting-edge technologies that are reshaping the global financial landscape. With a particular focus on cryptocurrency and blockchain, VanEck plans to back early-stage companies that are working on projects that could transform the digital economy. These investments will target promising startups developing innovative financial products, decentralized finance (DeFi) solutions, and advanced AI tools to support blockchain technology. VanEck has been one of the major institutional investors in the cryptocurrency space, and this new fund will enable it to deepen its involvement in blockchain technologies. VanEck sees cryptocurrency not just as a speculative asset but as a fundamental innovation that could reshape finance in the coming years. The firm also views blockchain as a key element in the future of financial services, with the potential to drive transparency, security, and efficiency in transactions. By investing in AI startups, VanEck seeks to harness the power of artificial intelligence to enhance its operations and support the broader crypto ecosystem. AI has the potential to improve everything from trading algorithms to fraud detection, and VanEck is betting on the promise of these technologies to enhance the long-term growth prospects of the financial sector. VanEck's approach is to back companies that combine both blockchain and AI, which will drive innovation in areas such as digital identity management, smart contracts, and predictive analytics. This fund will also support the development of decentralized applications (dApps) and financial solutions that are more efficient, scalable, and accessible to a wider audience. VanEck’s strategic investment will likely accelerate the adoption of these technologies across multiple industries, beyond finance, and into areas like supply chain management, healthcare, and data security. By backing the next generation of innovative tech entrepreneurs, VanEck aims to secure long-term growth opportunities in a rapidly evolving technological landscape.",
        
        4: "RBI Keeps Key Interest Rate Unchanged Amid Economic Concerns Description: The Reserve Bank of India (RBI) has decided to maintain its key lending rate at 6.5%, marking the tenth consecutive meeting where the central bank has chosen not to make any changes to the rate. This decision comes amid ongoing concerns about inflation and the need to balance the goals of supporting economic growth while keeping inflation under control. The RBI’s Monetary Policy Committee (MPC) continues to monitor inflation trends closely and is committed to ensuring that inflation remains within the targeted range of 4%. Despite facing challenges such as rising food prices and global supply chain disruptions, the RBI has opted to keep its policy stance neutral, indicating that the current rate is sufficient to anchor inflation expectations while supporting recovery in the economy. The central bank's cautious approach to rate changes reflects the complex nature of India's economic recovery, with inflationary pressures still a concern. With food and fuel prices remaining volatile, the RBI is taking a prudent stance to avoid stoking further inflationary risks. The decision to keep the key rate unchanged is seen as part of a broader strategy to maintain price stability and ensure sustainable economic growth. Economists have been divided on the potential for rate cuts in the future, with some arguing that the RBI should act to support growth, while others caution against such measures given the uncertainty in global markets. As India continues its economic recovery, the central bank faces the delicate task of managing inflation without stifling growth, which could harm job creation and investment",
        
        5: "India's Economic Outlook Signals Significant Improvement in Living Standards Description: Indian Finance Minister Nirmala Sitharaman has projected that India will experience the steepest rise in living standards in the coming decades, a forecast that is generating excitement across the country. The Minister’s outlook stems from a combination of economic reforms, growth in key sectors such as technology, manufacturing, and infrastructure, and the government's ongoing efforts to boost domestic consumption. As per the Finance Minister, the Indian government has set ambitious targets to double the country’s per capita income by 2030, which would represent a significant improvement in the overall standard of living. This projection is grounded in several factors, including India’s rising middle class, which is driving demand for goods and services, as well as the growing export potential in technology and pharmaceuticals. The finance ministry has pointed out that India’s demographic profile is a key advantage, with a large working-age population set to drive growth in various industries. Additionally, ongoing initiatives like the ‘Make in India’ campaign, which aims to boost domestic manufacturing, are expected to contribute significantly to the nation’s economic output. Investment in infrastructure, from new highways and railways to modern urban development, is also seen as a catalyst for broader economic progress. The government has been focused on policies that improve the ease of doing business in India, which has attracted significant foreign direct investment. Combined with India’s vibrant tech and startup ecosystem, these developments are expected to result in higher wages, improved job opportunities, and better living conditions. However, there are challenges ahead, such as ensuring that growth benefits are equitably distributed across the country, particularly in rural and economically weaker regions. The government is committed to addressing these disparities through targeted welfare programs, improved healthcare, and education initiatives. If these projections hold true, India’s rise in living standards could be one of the most remarkable economic stories of the coming decades."
    };

    // Add the full blog content to each blog post section
    for (const blogId in blogData) {
        const blogContent = document.getElementById(expanded-content-$,{blogId});
        blogContent.innerHTML = blogData[blogId];
    }
});