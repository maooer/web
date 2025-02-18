document.addEventListener('DOMContentLoaded', function() {
    // 从JSON文件中加载数据
    fetch('Wechat_2024_Data.json')
        .then(response => response.json())
        .then(data => {
            // 获取卡片容器元素
            const cardContainer = document.getElementById('cardContainer');

            // 遍历JSON数据并生成卡片
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                        <div class="card-title">${item.title}</div>
                        <p class="card-date"><strong>发布日期:</strong> ${item.date}</p>
                        <img src="${item.img}" class="card-img-top" alt="${item.title}">
                        <div class="card-info">
                            <div class="card-text"><p class="card-text-view"></p><p class="card-text-2">${item.views}</p></div>
                            <div class="card-text"><p class="card-text-like"></p><p class="card-text-2">${item.likes}</p></div>
                            <div class="card-text"><p class="card-text-share"></p><p class="card-text-2">${item.shares}</p></div>
                            <div class="card-text"><p class="card-text-watche"></p><p class="card-text-2">${item.watches}</p></div>
                            <div class="card-text"><p class="card-text-comment"></p><p class="card-text-2">${item.comments}</p></div>
                        </div>
                        <a href="${item.links}" class="btn btn-primary" target="_blank">查看原文</a>
                `;
                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading JSON data:', error));
});
