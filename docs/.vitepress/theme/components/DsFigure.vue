<script setup>
defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>

<template>
  <!-- 栈的结构 -->
  <div v-if="type === 'stack'" class="ds-figure ds-figure--stack">
    <svg viewBox="0 0 470 210" role="img" aria-label="栈的结构示意图：栈顶在 30 这一端，栈底在 10 这一端">
      <defs>
        <marker id="ch3-arrow-stack" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--home-text-2)"/>
        </marker>
        <marker id="ch3-arrow-stack-brand" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--vp-c-brand-1)"/>
        </marker>
      </defs>

      <text x="236" y="22" text-anchor="middle" font-size="12.5" fill="var(--vp-c-brand-1)">push 入栈 / pop 出栈</text>
      <line x1="236" y1="30" x2="236" y2="42" stroke="var(--vp-c-brand-1)" stroke-width="1.3" marker-end="url(#ch3-arrow-stack-brand)"/>

      <text x="150" y="73" text-anchor="end" font-size="13" fill="currentColor">栈顶 top</text>
      <line x1="158" y1="68" x2="180" y2="68" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-stack)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <rect x="184" y="46" width="104" height="44" rx="8"/>
        <rect x="184" y="98" width="104" height="44" rx="8"/>
        <rect x="184" y="150" width="104" height="44" rx="8"/>
      </g>
      <g fill="currentColor" font-size="16" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="236" y="68">30</text>
        <text x="236" y="120">20</text>
        <text x="236" y="172">10</text>
      </g>

      <text x="150" y="176" text-anchor="end" font-size="13" fill="var(--home-muted)">栈底</text>

      <text x="306" y="72" font-size="11.5" fill="var(--home-muted)">最后进来，最先出去</text>
      <text x="306" y="172" font-size="11.5" fill="var(--home-muted)">最先进来，最后出去</text>
    </svg>
  </div>

  <!-- 两种 top 约定并排 -->
  <div v-else-if="type === 'top-compare'" class="ds-figures">
    <div class="ds-figure">
      <svg viewBox="0 0 330 190" role="img" aria-label="top 指向栈顶元素：top 指向 30 所在的位置">
        <defs>
          <marker id="ch3-arrow-top-l" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="var(--vp-c-brand-1)"/>
          </marker>
        </defs>
        <text x="165" y="22" text-anchor="middle" font-size="12.5" font-weight="600" fill="currentColor">top 指向栈顶元素</text>
        <text x="158" y="44" text-anchor="middle" font-size="11.5" fill="var(--vp-c-brand-1)">top</text>
        <line x1="158" y1="48" x2="158" y2="58" stroke="var(--vp-c-brand-1)" stroke-width="1.3" marker-end="url(#ch3-arrow-top-l)"/>
        <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.1">
          <rect x="26" y="62" width="48" height="42" rx="7"/>
          <rect x="80" y="62" width="48" height="42" rx="7"/>
          <rect x="134" y="62" width="48" height="42" rx="7"/>
          <rect x="188" y="62" width="48" height="42" rx="7"/>
          <rect x="242" y="62" width="48" height="42" rx="7"/>
        </g>
        <g fill="currentColor" font-size="15" font-weight="500" text-anchor="middle" dominant-baseline="middle">
          <text x="50" y="83">10</text>
          <text x="104" y="83">20</text>
          <text x="158" y="83">30</text>
        </g>
        <g fill="var(--home-muted)" font-size="10.5" text-anchor="middle">
          <text x="50" y="120">0</text>
          <text x="104" y="120">1</text>
          <text x="158" y="120">2</text>
          <text x="212" y="120">3</text>
          <text x="266" y="120">4</text>
        </g>
        <text x="165" y="150" text-anchor="middle" font-size="11.5" fill="var(--home-muted)">空栈：top = -1</text>
      </svg>
    </div>
    <div class="ds-figure">
      <svg viewBox="0 0 330 190" role="img" aria-label="top 指向栈顶的下一个空位：top 指向 3 号空位">
        <defs>
          <marker id="ch3-arrow-top-r" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="var(--vp-c-brand-1)"/>
          </marker>
        </defs>
        <text x="165" y="22" text-anchor="middle" font-size="12.5" font-weight="600" fill="currentColor">top 指向栈顶的下一个空位</text>
        <text x="212" y="44" text-anchor="middle" font-size="11.5" fill="var(--vp-c-brand-1)">top</text>
        <line x1="212" y1="48" x2="212" y2="58" stroke="var(--vp-c-brand-1)" stroke-width="1.3" marker-end="url(#ch3-arrow-top-r)"/>
        <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.1">
          <rect x="26" y="62" width="48" height="42" rx="7"/>
          <rect x="80" y="62" width="48" height="42" rx="7"/>
          <rect x="134" y="62" width="48" height="42" rx="7"/>
          <rect x="188" y="62" width="48" height="42" rx="7"/>
          <rect x="242" y="62" width="48" height="42" rx="7"/>
        </g>
        <g fill="currentColor" font-size="15" font-weight="500" text-anchor="middle" dominant-baseline="middle">
          <text x="50" y="83">10</text>
          <text x="104" y="83">20</text>
          <text x="158" y="83">30</text>
        </g>
        <text x="212" y="83" text-anchor="middle" font-size="10" fill="var(--home-muted)">空位</text>
        <g fill="var(--home-muted)" font-size="10.5" text-anchor="middle">
          <text x="50" y="120">0</text>
          <text x="104" y="120">1</text>
          <text x="158" y="120">2</text>
          <text x="212" y="120">3</text>
          <text x="266" y="120">4</text>
        </g>
        <text x="165" y="150" text-anchor="middle" font-size="11.5" fill="var(--home-muted)">空栈：top = 0</text>
      </svg>
    </div>
  </div>

  <!-- 链栈 -->
  <div v-else-if="type === 'linked-stack'" class="ds-figure ds-figure--linked-stack">
    <svg viewBox="0 0 420 150" role="img" aria-label="链栈示意图：top 指向链表第一个结点">
      <defs>
        <marker id="ch3-arrow-lstack" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--home-text-2)"/>
        </marker>
      </defs>

      <text x="14" y="78" font-size="12.5" fill="currentColor">top</text>
      <line x1="46" y1="74" x2="62" y2="74" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-lstack)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <rect x="70" y="50" width="96" height="48" rx="8"/>
        <rect x="186" y="50" width="96" height="48" rx="8"/>
        <rect x="302" y="50" width="96" height="48" rx="8"/>
      </g>
      <g stroke="var(--home-text-2)" stroke-opacity="0.35" stroke-width="1">
        <line x1="128" y1="50" x2="128" y2="98"/>
        <line x1="244" y1="50" x2="244" y2="98"/>
        <line x1="360" y1="50" x2="360" y2="98"/>
      </g>
      <g fill="currentColor" font-size="15" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="99" y="74">30</text>
        <text x="215" y="74">20</text>
        <text x="331" y="74">10</text>
      </g>
      <g fill="currentColor">
        <circle cx="147" cy="74" r="3.2"/>
        <circle cx="263" cy="74" r="3.2"/>
      </g>
      <text x="379" y="74" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="var(--home-muted)">∧</text>

      <line x1="170" y1="74" x2="182" y2="74" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-lstack)"/>
      <line x1="286" y1="74" x2="298" y2="74" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-lstack)"/>

      <text x="210" y="132" text-anchor="middle" font-size="11.5" fill="var(--home-muted)">栈顶放在链表头，push / pop 都在头部完成，O(1)</text>
    </svg>
  </div>

  <!-- 队列 -->
  <div v-else-if="type === 'queue'" class="ds-figure ds-figure--queue">
    <svg viewBox="0 0 380 190" role="img" aria-label="队列示意图：front 指向队头元素，rear 指向队尾的下一个空位">
      <defs>
        <marker id="ch3-arrow-queue" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--home-text-2)"/>
        </marker>
      </defs>

      <text x="58" y="22" text-anchor="middle" font-size="11.5" fill="var(--vp-c-brand-1)">出队</text>
      <text x="58" y="42" text-anchor="middle" font-size="11.5" fill="currentColor">front</text>
      <line x1="58" y1="46" x2="58" y2="54" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-queue)"/>

      <text x="244" y="22" text-anchor="middle" font-size="11.5" fill="var(--vp-c-brand-1)">入队</text>
      <text x="244" y="42" text-anchor="middle" font-size="11.5" fill="currentColor">rear</text>
      <line x1="244" y1="46" x2="244" y2="54" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-queue)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <rect x="30" y="58" width="56" height="44" rx="7"/>
        <rect x="92" y="58" width="56" height="44" rx="7"/>
        <rect x="154" y="58" width="56" height="44" rx="7"/>
        <rect x="216" y="58" width="56" height="44" rx="7"/>
        <rect x="278" y="58" width="56" height="44" rx="7"/>
      </g>
      <g fill="currentColor" font-size="15" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="58" y="80">10</text>
        <text x="120" y="80">20</text>
        <text x="182" y="80">30</text>
      </g>
      <g fill="var(--home-muted)" font-size="10.5" text-anchor="middle">
        <text x="58" y="120">0</text>
        <text x="120" y="120">1</text>
        <text x="182" y="120">2</text>
        <text x="244" y="120">3</text>
        <text x="306" y="120">4</text>
      </g>
      <text x="190" y="158" text-anchor="middle" font-size="11.5" fill="var(--home-muted)">front 指向队头元素，rear 指向队尾的下一个位置</text>
    </svg>
  </div>

  <!-- 循环队列 -->
  <div v-else-if="type === 'circular-queue'" class="ds-figure ds-figure--circular">
    <svg viewBox="0 0 390 210" role="img" aria-label="循环队列示意图：数组首尾相接，front 指向队头，rear 指向队尾的下一个位置">
      <defs>
        <marker id="ch3-arrow-cqueue" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--home-text-2)"/>
        </marker>
        <marker id="ch3-arrow-cqueue-brand" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--vp-c-brand-1)"/>
        </marker>
      </defs>

      <text x="111" y="24" text-anchor="middle" font-size="11.5" fill="currentColor">front</text>
      <line x1="111" y1="28" x2="111" y2="48" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-cqueue)"/>
      <text x="279" y="24" text-anchor="middle" font-size="11.5" fill="currentColor">rear</text>
      <line x1="279" y1="28" x2="279" y2="48" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-cqueue)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <rect x="30" y="52" width="50" height="44" rx="7"/>
        <rect x="86" y="52" width="50" height="44" rx="7"/>
        <rect x="142" y="52" width="50" height="44" rx="7"/>
        <rect x="198" y="52" width="50" height="44" rx="7"/>
        <rect x="254" y="52" width="50" height="44" rx="7"/>
        <rect x="310" y="52" width="50" height="44" rx="7"/>
      </g>
      <g fill="currentColor" font-size="15" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="111" y="74">20</text>
        <text x="167" y="74">30</text>
        <text x="223" y="74">40</text>
      </g>
      <g fill="var(--home-muted)" font-size="10.5" text-anchor="middle">
        <text x="55" y="112">0</text>
        <text x="111" y="112">1</text>
        <text x="167" y="112">2</text>
        <text x="223" y="112">3</text>
        <text x="279" y="112">4</text>
        <text x="335" y="112">5</text>
      </g>

      <path d="M 335 118 L 335 136 Q 335 144 327 144 L 63 144 Q 55 144 55 136 L 55 118"
            fill="none" stroke="var(--vp-c-brand-1)" stroke-width="1.3" marker-end="url(#ch3-arrow-cqueue-brand)"/>
      <text x="195" y="166" text-anchor="middle" font-size="11.5" fill="var(--vp-c-brand-1)">首尾相接</text>

      <text x="195" y="192" text-anchor="middle" font-size="11.5" fill="var(--home-muted)">front = 1，rear = 4，元素个数 = (4-1+6)%6 = 3</text>
    </svg>
  </div>

  <!-- 链队列 -->
  <div v-else-if="type === 'linked-queue'" class="ds-figure ds-figure--linked-queue">
    <svg viewBox="0 0 450 170" role="img" aria-label="链队列示意图：front 指向队头结点，rear 指向队尾结点">
      <defs>
        <marker id="ch3-arrow-lqueue" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--home-text-2)"/>
        </marker>
      </defs>

      <text x="14" y="86" font-size="12.5" fill="currentColor">front</text>
      <line x1="46" y1="82" x2="72" y2="82" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-lqueue)"/>

      <text x="368" y="28" text-anchor="middle" font-size="12.5" fill="currentColor">rear</text>
      <line x1="368" y1="34" x2="368" y2="52" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-lqueue)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <rect x="80" y="58" width="96" height="48" rx="8"/>
        <rect x="200" y="58" width="96" height="48" rx="8"/>
        <rect x="320" y="58" width="96" height="48" rx="8"/>
      </g>
      <g stroke="var(--home-text-2)" stroke-opacity="0.35" stroke-width="1">
        <line x1="138" y1="58" x2="138" y2="106"/>
        <line x1="258" y1="58" x2="258" y2="106"/>
        <line x1="378" y1="58" x2="378" y2="106"/>
      </g>
      <g fill="currentColor" font-size="15" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="109" y="82">10</text>
        <text x="229" y="82">20</text>
        <text x="349" y="82">30</text>
      </g>
      <g fill="currentColor">
        <circle cx="157" cy="82" r="3.2"/>
        <circle cx="277" cy="82" r="3.2"/>
      </g>
      <text x="397" y="82" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="var(--home-muted)">∧</text>

      <line x1="180" y1="82" x2="196" y2="82" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-lqueue)"/>
      <line x1="300" y1="82" x2="316" y2="82" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch3-arrow-lqueue)"/>

      <text x="225" y="140" text-anchor="middle" font-size="11.5" fill="var(--home-muted)">队头出队，队尾入队；删除最后一个结点时 rear 也要改</text>
    </svg>
  </div>

  <!-- 顺序表结构 -->
  <div v-else-if="type === 'seq-list'" class="ds-figure ds-figure--seq-list">
    <svg viewBox="0 0 400 200" role="img" aria-label="顺序表结构图：一段连续内存，依次存放 10、20、30、40，最后一个是空位">
      <defs>
        <marker id="ch2-arrow-seq" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--home-text-2)"/>
        </marker>
      </defs>

      <text x="200" y="22" text-anchor="middle" font-size="12.5" font-weight="500" fill="currentColor">顺序表：一段连续的内存（数组）</text>

      <g fill="var(--home-muted)" font-size="10.5" text-anchor="middle">
        <text x="61" y="44">0</text>
        <text x="129" y="44">1</text>
        <text x="197" y="44">2</text>
        <text x="265" y="44">3</text>
        <text x="333" y="44">4</text>
      </g>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <rect x="30" y="56" width="62" height="44" rx="7"/>
        <rect x="98" y="56" width="62" height="44" rx="7"/>
        <rect x="166" y="56" width="62" height="44" rx="7"/>
        <rect x="234" y="56" width="62" height="44" rx="7"/>
        <rect x="302" y="56" width="62" height="44" rx="7"/>
      </g>
      <g fill="currentColor" font-size="15" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="61" y="78">10</text>
        <text x="129" y="78">20</text>
        <text x="197" y="78">30</text>
        <text x="265" y="78">40</text>
      </g>
      <text x="333" y="78" text-anchor="middle" dominant-baseline="middle" font-size="10.5" fill="var(--home-muted)">空位</text>

      <line x1="61" y1="140" x2="61" y2="106" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch2-arrow-seq)"/>
      <text x="61" y="158" text-anchor="middle" font-size="11" fill="var(--home-muted)">base 起始地址</text>
      <text x="200" y="186" text-anchor="middle" font-size="11.5" fill="var(--home-muted)">a[i] 的地址 = base + i × 每个元素占的字节数</text>
    </svg>
  </div>

  <!-- 单链表结构（保留数据域 / next 标注） -->
  <div v-else-if="type === 'linked-list'" class="ds-figure ds-figure--linked-list">
    <svg viewBox="0 0 520 170" role="img" aria-label="单链表结构图：head 指向第一个结点，每个结点由数据域和 next 指针组成">
      <defs>
        <marker id="ch2-arrow-list" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--home-text-2)"/>
        </marker>
      </defs>

      <text x="260" y="22" text-anchor="middle" font-size="12.5" font-weight="500" fill="currentColor">单链表：结点可以分散存放，靠 next 指针连接</text>

      <text x="14" y="79" font-size="12.5" fill="currentColor">head</text>
      <line x1="46" y1="75" x2="56" y2="75" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch2-arrow-list)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <rect x="60" y="50" width="108" height="50" rx="8"/>
        <rect x="200" y="50" width="108" height="50" rx="8"/>
        <rect x="340" y="50" width="108" height="50" rx="8"/>
      </g>
      <g stroke="var(--home-text-2)" stroke-opacity="0.35" stroke-width="1">
        <line x1="124" y1="50" x2="124" y2="100"/>
        <line x1="264" y1="50" x2="264" y2="100"/>
        <line x1="404" y1="50" x2="404" y2="100"/>
      </g>
      <g fill="currentColor" font-size="15" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="92" y="75">10</text>
        <text x="232" y="75">20</text>
        <text x="372" y="75">30</text>
      </g>
      <g fill="currentColor">
        <circle cx="146" cy="75" r="3.2"/>
        <circle cx="286" cy="75" r="3.2"/>
      </g>
      <text x="426" y="75" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="var(--home-muted)">∧</text>

      <line x1="168" y1="75" x2="196" y2="75" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch2-arrow-list)"/>
      <line x1="308" y1="75" x2="336" y2="75" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch2-arrow-list)"/>

      <g fill="var(--home-muted)" font-size="10.5" text-anchor="middle">
        <text x="92" y="122">数据</text>
        <text x="146" y="122">next</text>
        <text x="232" y="122">数据</text>
        <text x="286" y="122">next</text>
        <text x="372" y="122">数据</text>
        <text x="426" y="122">next</text>
      </g>

      <text x="260" y="152" text-anchor="middle" font-size="10.5" fill="var(--home-muted)">∧ 表示 NULL，说明后面没有结点了</text>
    </svg>
  </div>

  <!-- 带头结点的单链表 -->
  <div v-else-if="type === 'linked-list-head'" class="ds-figure ds-figure--linked-list-head">
    <svg viewBox="0 0 520 145" role="img" aria-label="带头结点的单链表：head 指向头结点，头结点后面是第 1 个和第 2 个数据结点">
      <defs>
        <marker id="ch2-arrow-head" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--home-text-2)"/>
        </marker>
      </defs>

      <text x="14" y="74" font-size="12.5" fill="currentColor">head</text>
      <line x1="46" y1="70" x2="56" y2="70" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch2-arrow-head)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <rect x="60" y="45" width="112" height="50" rx="8"/>
        <rect x="200" y="45" width="112" height="50" rx="8"/>
        <rect x="340" y="45" width="112" height="50" rx="8"/>
      </g>
      <g stroke="var(--home-text-2)" stroke-opacity="0.35" stroke-width="1">
        <line x1="126" y1="45" x2="126" y2="95"/>
        <line x1="266" y1="45" x2="266" y2="95"/>
        <line x1="406" y1="45" x2="406" y2="95"/>
      </g>
      <g fill="currentColor" font-size="15" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="233" y="70">10</text>
        <text x="373" y="70">20</text>
      </g>
      <text x="93" y="70" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="var(--home-muted)">空</text>
      <g fill="currentColor">
        <circle cx="149" cy="70" r="3.2"/>
        <circle cx="289" cy="70" r="3.2"/>
      </g>
      <text x="429" y="70" text-anchor="middle" dominant-baseline="middle" font-size="13" fill="var(--home-muted)">∧</text>

      <line x1="172" y1="70" x2="196" y2="70" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch2-arrow-head)"/>
      <line x1="312" y1="70" x2="336" y2="70" stroke="var(--home-text-2)" stroke-width="1.3" marker-end="url(#ch2-arrow-head)"/>

      <g fill="var(--home-muted)" font-size="10.5" text-anchor="middle">
        <text x="116" y="115">头结点</text>
        <text x="256" y="115">第 1 个结点</text>
        <text x="396" y="115">第 2 个结点</text>
      </g>
    </svg>
  </div>

  <!-- 二叉树示例 -->
  <div v-else-if="type === 'binary-tree'" class="ds-figure ds-figure--binary-tree">
    <svg viewBox="0 0 360 215" role="img" aria-label="二叉树示例：A 是根，B、C 是左右孩子，D、E、F 是叶子">
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="180" y1="45" x2="105" y2="115"/>
        <line x1="180" y1="45" x2="255" y2="115"/>
        <line x1="105" y1="115" x2="65" y2="185"/>
        <line x1="105" y1="115" x2="145" y2="185"/>
        <line x1="255" y1="115" x2="215" y2="185"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="180" cy="45" r="17"/>
        <circle cx="105" cy="115" r="17"/>
        <circle cx="255" cy="115" r="17"/>
        <circle cx="65" cy="185" r="17"/>
        <circle cx="145" cy="185" r="17"/>
        <circle cx="215" cy="185" r="17"/>
      </g>
      <g fill="currentColor" font-size="14" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="180" y="45">A</text>
        <text x="105" y="115">B</text>
        <text x="255" y="115">C</text>
        <text x="65" y="185">D</text>
        <text x="145" y="185">E</text>
        <text x="215" y="185">F</text>
      </g>
      <g fill="var(--home-muted)" font-size="10">
        <text x="126" y="82">左</text>
        <text x="230" y="82">右</text>
      </g>
    </svg>
  </div>

  <!-- 完全二叉树编号 -->
  <div v-else-if="type === 'complete-tree'" class="ds-figure ds-figure--complete-tree">
    <svg viewBox="0 0 380 225" role="img" aria-label="完全二叉树示例：按层从左到右编号 1 到 6">
      <text x="190" y="20" text-anchor="middle" font-size="12" font-weight="500" fill="currentColor">完全二叉树：按层从左到右编号</text>
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="190" y1="55" x2="110" y2="120"/>
        <line x1="190" y1="55" x2="270" y2="120"/>
        <line x1="110" y1="120" x2="70" y2="185"/>
        <line x1="110" y1="120" x2="150" y2="185"/>
        <line x1="270" y1="120" x2="230" y2="185"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="190" cy="55" r="17"/>
        <circle cx="110" cy="120" r="17"/>
        <circle cx="270" cy="120" r="17"/>
        <circle cx="70" cy="185" r="17"/>
        <circle cx="150" cy="185" r="17"/>
        <circle cx="230" cy="185" r="17"/>
      </g>
      <g fill="currentColor" font-size="13" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="190" y="55">1</text>
        <text x="110" y="120">2</text>
        <text x="270" y="120">3</text>
        <text x="70" y="185">4</text>
        <text x="150" y="185">5</text>
        <text x="230" y="185">6</text>
      </g>
    </svg>
  </div>

  <!-- 森林示例：两棵互不相交的树 -->
  <div v-else-if="type === 'forest-example'" class="ds-figure ds-figure--forest-example">
    <svg viewBox="0 0 520 270" role="img" aria-label="森林示例：树 T1 以 A 为根，树 T2 以 H 为根，两棵树互不相交">
      <g font-size="12" font-weight="500" text-anchor="middle" fill="currentColor">
        <text x="135" y="20">树 T1</text>
        <text x="405" y="20">树 T2</text>
      </g>
      <line x1="290" y1="32" x2="290" y2="235" stroke="var(--home-text-2)" stroke-opacity="0.22" stroke-width="1.2" stroke-dasharray="4 6"/>

      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="135" y1="50" x2="60" y2="130"/>
        <line x1="135" y1="50" x2="135" y2="130"/>
        <line x1="135" y1="50" x2="210" y2="130"/>
        <line x1="60" y1="130" x2="35" y2="215"/>
        <line x1="60" y1="130" x2="85" y2="215"/>
        <line x1="210" y1="130" x2="210" y2="215"/>
        <line x1="405" y1="50" x2="360" y2="140"/>
        <line x1="405" y1="50" x2="450" y2="140"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="135" cy="50" r="17"/>
        <circle cx="60" cy="130" r="17"/>
        <circle cx="135" cy="130" r="17"/>
        <circle cx="210" cy="130" r="17"/>
        <circle cx="35" cy="215" r="17"/>
        <circle cx="85" cy="215" r="17"/>
        <circle cx="210" cy="215" r="17"/>
        <circle cx="405" cy="50" r="17"/>
        <circle cx="360" cy="140" r="17"/>
        <circle cx="450" cy="140" r="17"/>
      </g>
      <g fill="currentColor" font-size="13" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="135" y="50">A</text>
        <text x="60" y="130">B</text>
        <text x="135" y="130">C</text>
        <text x="210" y="130">D</text>
        <text x="35" y="215">E</text>
        <text x="85" y="215">F</text>
        <text x="210" y="215">G</text>
        <text x="405" y="50">H</text>
        <text x="360" y="140">I</text>
        <text x="450" y="140">J</text>
      </g>
      <text x="260" y="256" text-anchor="middle" font-size="11.5" fill="var(--home-muted)">两棵树互不相交，合在一起就是森林</text>
    </svg>
  </div>

  <!-- 树与对应二叉树：左孩子右兄弟 -->
  <div v-else-if="type === 'tree-to-binary'" class="ds-figure ds-figure--tree-to-binary">
    <svg viewBox="0 0 700 305" role="img" aria-label="树转二叉树示例：第一个孩子连接到左指针，其余兄弟依次连接到右指针">
      <defs>
        <marker id="ch4-arrow-tree-convert" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--vp-c-brand-1)"/>
        </marker>
      </defs>
      <g font-size="12" font-weight="500" text-anchor="middle" fill="currentColor">
        <text x="115" y="20">原树</text>
        <text x="475" y="20">对应的二叉树</text>
      </g>

      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="115" y1="50" x2="45" y2="135"/>
        <line x1="115" y1="50" x2="115" y2="135"/>
        <line x1="115" y1="50" x2="185" y2="135"/>
        <line x1="45" y1="135" x2="20" y2="225"/>
        <line x1="45" y1="135" x2="70" y2="225"/>
        <line x1="185" y1="135" x2="185" y2="225"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="115" cy="50" r="16"/>
        <circle cx="45" cy="135" r="16"/>
        <circle cx="115" cy="135" r="16"/>
        <circle cx="185" cy="135" r="16"/>
        <circle cx="20" cy="225" r="16"/>
        <circle cx="70" cy="225" r="16"/>
        <circle cx="185" cy="225" r="16"/>
      </g>
      <g fill="currentColor" font-size="13" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="115" y="50">A</text>
        <text x="45" y="135">B</text>
        <text x="115" y="135">C</text>
        <text x="185" y="135">D</text>
        <text x="20" y="225">E</text>
        <text x="70" y="225">F</text>
        <text x="185" y="225">G</text>
      </g>

      <text x="265" y="120" text-anchor="middle" font-size="11.5" fill="var(--vp-c-brand-1)">左孩子右兄弟</text>
      <line x1="230" y1="145" x2="300" y2="145" stroke="var(--vp-c-brand-1)" stroke-width="1.5" marker-end="url(#ch4-arrow-tree-convert)"/>

      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="400" y1="50" x2="350" y2="110"/>
        <line x1="350" y1="110" x2="285" y2="180"/>
        <line x1="575" y1="180" x2="515" y2="250"/>
      </g>
      <g stroke="var(--vp-c-brand-1)" stroke-opacity="0.85" stroke-width="1.5">
        <line x1="350" y1="110" x2="460" y2="145"/>
        <line x1="285" y1="180" x2="350" y2="235"/>
        <line x1="460" y1="145" x2="575" y2="180"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="400" cy="50" r="16"/>
        <circle cx="350" cy="110" r="16"/>
        <circle cx="285" cy="180" r="16"/>
        <circle cx="350" cy="235" r="16"/>
        <circle cx="460" cy="145" r="16"/>
        <circle cx="575" cy="180" r="16"/>
        <circle cx="515" cy="250" r="16"/>
      </g>
      <g fill="currentColor" font-size="13" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="400" y="50">A</text>
        <text x="350" y="110">B</text>
        <text x="285" y="180">E</text>
        <text x="350" y="235">F</text>
        <text x="460" y="145">C</text>
        <text x="575" y="180">D</text>
        <text x="515" y="250">G</text>
      </g>
      <g font-size="10" fill="var(--home-muted)">
        <text x="371" y="76">左</text>
        <text x="312" y="140">左</text>
        <text x="551" y="220">左</text>
      </g>
      <g font-size="10" fill="var(--vp-c-brand-1)">
        <text x="408" y="116">右</text>
        <text x="310" y="214">右</text>
        <text x="524" y="151">右</text>
      </g>
      <text x="475" y="292" text-anchor="middle" font-size="11" fill="var(--vp-c-brand-1)">橙色连线表示右指针：指向下一个兄弟</text>
    </svg>
  </div>

  <!-- 森林转二叉树：两棵树各自转换，再用右指针把根串起来 -->
  <div v-else-if="type === 'forest-to-binary'" class="ds-figure ds-figure--forest-to-binary">
    <svg viewBox="0 0 700 300" role="img" aria-label="森林转二叉树三步：森林有两棵树，每棵树各自按左孩子右兄弟转成二叉树，再用根的右指针把两棵二叉树串成一棵">
      <defs>
        <marker id="ch4-arrow-f2b" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--vp-c-brand-1)"/>
        </marker>
      </defs>

      <g fill="currentColor" font-size="12" font-weight="500" text-anchor="middle">
        <text x="105" y="18">① 森林（两棵树）</text>
        <text x="355" y="18">② 每棵树各自转换</text>
        <text x="595" y="18">③ 用右指针串成一棵</text>
      </g>

      <!-- ① 森林 -->
      <line x1="142" y1="32" x2="142" y2="192" stroke="var(--home-text-2)" stroke-opacity="0.22" stroke-width="1.2" stroke-dasharray="4 6"/>
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="75" y1="48" x2="40" y2="112"/>
        <line x1="75" y1="48" x2="75" y2="112"/>
        <line x1="75" y1="48" x2="110" y2="112"/>
        <line x1="40" y1="112" x2="22" y2="176"/>
        <line x1="40" y1="112" x2="58" y2="176"/>
        <line x1="110" y1="112" x2="110" y2="176"/>
        <line x1="180" y1="48" x2="155" y2="112"/>
        <line x1="180" y1="48" x2="205" y2="112"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="75" cy="48" r="12"/>
        <circle cx="40" cy="112" r="12"/>
        <circle cx="75" cy="112" r="12"/>
        <circle cx="110" cy="112" r="12"/>
        <circle cx="22" cy="176" r="12"/>
        <circle cx="58" cy="176" r="12"/>
        <circle cx="110" cy="176" r="12"/>
        <circle cx="180" cy="48" r="12"/>
        <circle cx="155" cy="112" r="12"/>
        <circle cx="205" cy="112" r="12"/>
      </g>
      <g fill="currentColor" font-size="11" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="75" y="48">A</text>
        <text x="40" y="112">B</text>
        <text x="75" y="112">C</text>
        <text x="110" y="112">D</text>
        <text x="22" y="176">E</text>
        <text x="58" y="176">F</text>
        <text x="110" y="176">G</text>
        <text x="180" y="48">H</text>
        <text x="155" y="112">I</text>
        <text x="205" y="112">J</text>
      </g>

      <line x1="222" y1="140" x2="248" y2="140" stroke="var(--vp-c-brand-1)" stroke-width="1.4" marker-end="url(#ch4-arrow-f2b)"/>

      <!-- ② 各自转换 -->
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="325" y1="48" x2="295" y2="100"/>
        <line x1="295" y1="100" x2="267" y2="152"/>
        <line x1="267" y1="152" x2="295" y2="204"/>
        <line x1="371" y1="204" x2="351" y2="256"/>
        <line x1="445" y1="48" x2="423" y2="100"/>
      </g>
      <g stroke="var(--vp-c-brand-1)" stroke-opacity="0.85" stroke-width="1.4">
        <line x1="295" y1="100" x2="333" y2="152"/>
        <line x1="333" y1="152" x2="371" y2="204"/>
        <line x1="423" y1="100" x2="453" y2="152"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="325" cy="48" r="12"/>
        <circle cx="295" cy="100" r="12"/>
        <circle cx="267" cy="152" r="12"/>
        <circle cx="333" cy="152" r="12"/>
        <circle cx="295" cy="204" r="12"/>
        <circle cx="371" cy="204" r="12"/>
        <circle cx="351" cy="256" r="12"/>
        <circle cx="445" cy="48" r="12"/>
        <circle cx="423" cy="100" r="12"/>
        <circle cx="453" cy="152" r="12"/>
      </g>
      <g fill="currentColor" font-size="11" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="325" y="48">A</text>
        <text x="295" y="100">B</text>
        <text x="267" y="152">E</text>
        <text x="333" y="152">C</text>
        <text x="295" y="204">F</text>
        <text x="371" y="204">D</text>
        <text x="351" y="256">G</text>
        <text x="445" y="48">H</text>
        <text x="423" y="100">I</text>
        <text x="453" y="152">J</text>
      </g>
      <text x="270" y="288" text-anchor="middle" font-size="10.5" fill="var(--home-muted)">左孩子右兄弟，各转各的</text>

      <line x1="470" y1="140" x2="500" y2="140" stroke="var(--vp-c-brand-1)" stroke-width="1.4" marker-end="url(#ch4-arrow-f2b)"/>

      <!-- ③ 串成一棵 -->
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="590" y1="48" x2="550" y2="100"/>
        <line x1="550" y1="100" x2="520" y2="152"/>
        <line x1="520" y1="152" x2="550" y2="204"/>
        <line x1="630" y1="204" x2="610" y2="256"/>
        <line x1="650" y1="100" x2="630" y2="152"/>
      </g>
      <g stroke="var(--vp-c-brand-1)" stroke-width="1.5">
        <line x1="590" y1="48" x2="650" y2="100"/>
        <line x1="630" y1="152" x2="660" y2="204"/>
      </g>
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="550" y1="100" x2="590" y2="152"/>
        <line x1="590" y1="152" x2="630" y2="204"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="590" cy="48" r="12"/>
        <circle cx="550" cy="100" r="12"/>
        <circle cx="650" cy="100" r="12"/>
        <circle cx="520" cy="152" r="12"/>
        <circle cx="590" cy="152" r="12"/>
        <circle cx="630" cy="152" r="12"/>
        <circle cx="550" cy="204" r="12"/>
        <circle cx="630" cy="204" r="12"/>
        <circle cx="660" cy="204" r="12"/>
        <circle cx="610" cy="256" r="12"/>
      </g>
      <g fill="currentColor" font-size="11" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="590" y="48">A</text>
        <text x="550" y="100">B</text>
        <text x="650" y="100">H</text>
        <text x="520" y="152">E</text>
        <text x="590" y="152">C</text>
        <text x="630" y="152">I</text>
        <text x="550" y="204">F</text>
        <text x="630" y="204">D</text>
        <text x="660" y="204">J</text>
        <text x="610" y="256">G</text>
      </g>
      <text x="595" y="288" text-anchor="middle" font-size="10.5" fill="var(--vp-c-brand-1)">橙色：A 的右指针指向第二棵树的根 H</text>
    </svg>
  </div>

  <!-- 二叉树转树：左孩子连同右链一起变成孩子 -->
  <div v-else-if="type === 'binary-to-tree'" class="ds-figure ds-figure--binary-to-tree">
    <svg viewBox="0 0 430 300" role="img" aria-label="二叉树转树：每个结点的左孩子连同它沿右指针走到的结点，都是这个结点在原树中的孩子">
      <defs>
        <marker id="ch4-arrow-b2t" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--vp-c-brand-1)"/>
        </marker>
      </defs>

      <g fill="currentColor" font-size="12" font-weight="500" text-anchor="middle">
        <text x="105" y="18">二叉树</text>
        <text x="325" y="18">还原出的树</text>
      </g>

      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="110" y1="50" x2="80" y2="102"/>
        <line x1="80" y1="102" x2="50" y2="154"/>
        <line x1="156" y1="206" x2="136" y2="258"/>
      </g>
      <g stroke="var(--vp-c-brand-1)" stroke-opacity="0.85" stroke-width="1.5">
        <line x1="80" y1="102" x2="118" y2="154"/>
        <line x1="50" y1="154" x2="80" y2="206"/>
        <line x1="118" y1="154" x2="156" y2="206"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="110" cy="50" r="13"/>
        <circle cx="80" cy="102" r="13"/>
        <circle cx="50" cy="154" r="13"/>
        <circle cx="118" cy="154" r="13"/>
        <circle cx="80" cy="206" r="13"/>
        <circle cx="156" cy="206" r="13"/>
        <circle cx="136" cy="258" r="13"/>
      </g>
      <g fill="currentColor" font-size="12" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="110" y="50">A</text>
        <text x="80" y="102">B</text>
        <text x="50" y="154">E</text>
        <text x="118" y="154">C</text>
        <text x="80" y="206">F</text>
        <text x="156" y="206">D</text>
        <text x="136" y="258">G</text>
      </g>
      <g fill="var(--vp-c-brand-1)" font-size="9.5" text-anchor="middle">
        <text x="103" y="122">右</text>
        <text x="61" y="184">右</text>
        <text x="142" y="184">右</text>
      </g>

      <line x1="188" y1="150" x2="248" y2="150" stroke="var(--vp-c-brand-1)" stroke-width="1.4" marker-end="url(#ch4-arrow-b2t)"/>

      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="330" y1="50" x2="295" y2="118"/>
        <line x1="330" y1="50" x2="330" y2="118"/>
        <line x1="330" y1="50" x2="365" y2="118"/>
        <line x1="295" y1="118" x2="278" y2="186"/>
        <line x1="295" y1="118" x2="313" y2="186"/>
        <line x1="365" y1="118" x2="365" y2="186"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="330" cy="50" r="13"/>
        <circle cx="295" cy="118" r="13"/>
        <circle cx="330" cy="118" r="13"/>
        <circle cx="365" cy="118" r="13"/>
        <circle cx="278" cy="186" r="13"/>
        <circle cx="313" cy="186" r="13"/>
        <circle cx="365" cy="186" r="13"/>
      </g>
      <g fill="currentColor" font-size="12" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="330" y="50">A</text>
        <text x="295" y="118">B</text>
        <text x="330" y="118">C</text>
        <text x="365" y="118">D</text>
        <text x="278" y="186">E</text>
        <text x="313" y="186">F</text>
        <text x="365" y="186">G</text>
      </g>

      <text x="215" y="288" text-anchor="middle" font-size="10.5" fill="var(--home-muted)">左孩子 + 沿右指针走到的结点 = 原树里的一排孩子</text>
    </svg>
  </div>

  <!-- 二叉树转森林：连左孩子的右链，再删掉所有右线 -->
  <div v-else-if="type === 'binary-to-forest'" class="ds-figure ds-figure--binary-to-forest">
    <svg viewBox="0 0 710 320" role="img" aria-label="二叉树转森林三步：原二叉树，把左孩子的右链连成孩子并删掉所有右线，最后得到三棵树的森林">
      <g fill="currentColor" font-size="12" font-weight="500" text-anchor="middle">
        <text x="105" y="18">① 原二叉树</text>
        <text x="335" y="18">② 连左链、删右线</text>
        <text x="590" y="18">③ 得到森林（3 棵树）</text>
      </g>

      <!-- ① 原二叉树 -->
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="105" y1="50" x2="70" y2="102"/>
        <line x1="105" y1="50" x2="145" y2="102"/>
        <line x1="70" y1="102" x2="85" y2="154"/>
        <line x1="145" y1="102" x2="125" y2="154"/>
        <line x1="145" y1="102" x2="175" y2="154"/>
        <line x1="85" y1="154" x2="55" y2="206"/>
        <line x1="85" y1="154" x2="115" y2="206"/>
        <line x1="55" y1="206" x2="35" y2="258"/>
        <line x1="55" y1="206" x2="70" y2="258"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="105" cy="50" r="13"/>
        <circle cx="70" cy="102" r="13"/>
        <circle cx="145" cy="102" r="13"/>
        <circle cx="85" cy="154" r="13"/>
        <circle cx="125" cy="154" r="13"/>
        <circle cx="175" cy="154" r="13"/>
        <circle cx="55" cy="206" r="13"/>
        <circle cx="115" cy="206" r="13"/>
        <circle cx="35" cy="258" r="13"/>
        <circle cx="70" cy="258" r="13"/>
      </g>
      <g fill="currentColor" font-size="12" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="105" y="50">A</text>
        <text x="70" y="102">B</text>
        <text x="145" y="102">C</text>
        <text x="85" y="154">D</text>
        <text x="125" y="154">E</text>
        <text x="175" y="154">F</text>
        <text x="55" y="206">G</text>
        <text x="115" y="206">H</text>
        <text x="35" y="258">I</text>
        <text x="70" y="258">J</text>
      </g>

      <line x1="196" y1="150" x2="246" y2="150" stroke="var(--vp-c-brand-1)" stroke-width="1.4"/>

      <!-- ② 连左链、删右线 -->
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="335" y1="50" x2="300" y2="102"/>
        <line x1="375" y1="102" x2="355" y2="154"/>
        <line x1="315" y1="154" x2="285" y2="206"/>
        <line x1="285" y1="206" x2="265" y2="258"/>
      </g>
      <g stroke="var(--home-text-2)" stroke-opacity="0.35" stroke-width="1.2" stroke-dasharray="4 4">
        <line x1="335" y1="50" x2="375" y2="102"/>
        <line x1="300" y1="102" x2="315" y2="154"/>
        <line x1="375" y1="102" x2="405" y2="154"/>
        <line x1="315" y1="154" x2="345" y2="206"/>
        <line x1="285" y1="206" x2="300" y2="258"/>
      </g>
      <g stroke="var(--vp-c-brand-1)" stroke-width="1.5">
        <line x1="335" y1="50" x2="315" y2="154"/>
        <line x1="335" y1="50" x2="345" y2="206"/>
        <line x1="315" y1="154" x2="300" y2="258"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="335" cy="50" r="13"/>
        <circle cx="300" cy="102" r="13"/>
        <circle cx="375" cy="102" r="13"/>
        <circle cx="315" cy="154" r="13"/>
        <circle cx="355" cy="154" r="13"/>
        <circle cx="405" cy="154" r="13"/>
        <circle cx="285" cy="206" r="13"/>
        <circle cx="345" cy="206" r="13"/>
        <circle cx="265" cy="258" r="13"/>
        <circle cx="300" cy="258" r="13"/>
      </g>
      <g fill="currentColor" font-size="12" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="335" y="50">A</text>
        <text x="300" y="102">B</text>
        <text x="375" y="102">C</text>
        <text x="315" y="154">D</text>
        <text x="355" y="154">E</text>
        <text x="405" y="154">F</text>
        <text x="285" y="206">G</text>
        <text x="345" y="206">H</text>
        <text x="265" y="258">I</text>
        <text x="300" y="258">J</text>
      </g>

      <line x1="424" y1="150" x2="454" y2="150" stroke="var(--vp-c-brand-1)" stroke-width="1.4"/>

      <!-- ③ 森林 -->
      <line x1="600" y1="34" x2="600" y2="140" stroke="var(--home-text-2)" stroke-opacity="0.22" stroke-width="1.2" stroke-dasharray="4 6"/>
      <line x1="662" y1="34" x2="662" y2="140" stroke="var(--home-text-2)" stroke-opacity="0.22" stroke-width="1.2" stroke-dasharray="4 6"/>
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="520" y1="50" x2="490" y2="115"/>
        <line x1="520" y1="50" x2="530" y2="115"/>
        <line x1="520" y1="50" x2="570" y2="115"/>
        <line x1="530" y1="115" x2="510" y2="180"/>
        <line x1="530" y1="115" x2="550" y2="180"/>
        <line x1="510" y1="180" x2="510" y2="245"/>
        <line x1="630" y1="50" x2="630" y2="115"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="520" cy="50" r="12"/>
        <circle cx="490" cy="115" r="12"/>
        <circle cx="530" cy="115" r="12"/>
        <circle cx="570" cy="115" r="12"/>
        <circle cx="510" cy="180" r="12"/>
        <circle cx="550" cy="180" r="12"/>
        <circle cx="510" cy="245" r="12"/>
        <circle cx="630" cy="50" r="12"/>
        <circle cx="630" cy="115" r="12"/>
        <circle cx="690" cy="50" r="12"/>
      </g>
      <g fill="currentColor" font-size="11" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="520" y="50">A</text>
        <text x="490" y="115">B</text>
        <text x="530" y="115">D</text>
        <text x="570" y="115">H</text>
        <text x="510" y="180">G</text>
        <text x="550" y="180">J</text>
        <text x="510" y="245">I</text>
        <text x="630" y="50">C</text>
        <text x="630" y="115">E</text>
        <text x="690" y="50">F</text>
      </g>

      <text x="590" y="284" text-anchor="middle" font-size="10.5" fill="var(--home-muted)">三棵树的根：A、C、F</text>
      <text x="355" y="306" text-anchor="middle" font-size="10.5" fill="var(--home-muted)">橙色 = 新连的“孩子线”（要保留）；灰色虚线 = 右指针（全部删掉）</text>
    </svg>
  </div>

  <!-- 哈夫曼树示例 -->
  <div v-else-if="type === 'huffman-tree'" class="ds-figure ds-figure--huffman-tree">
    <svg viewBox="0 0 420 285" role="img" aria-label="哈夫曼树示例：权值 1、2、4、5，合并过程为 1+2=3、3+4=7、5+7=12">
      <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="500" fill="currentColor">哈夫曼树：每次合并最小的两个</text>
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="210" y1="50" x2="110" y2="120"/>
        <line x1="210" y1="50" x2="310" y2="120"/>
        <line x1="310" y1="120" x2="250" y2="190"/>
        <line x1="310" y1="120" x2="370" y2="190"/>
        <line x1="250" y1="190" x2="210" y2="255"/>
        <line x1="250" y1="190" x2="290" y2="255"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="210" cy="50" r="16"/>
        <circle cx="110" cy="120" r="16"/>
        <circle cx="310" cy="120" r="16"/>
        <circle cx="250" cy="190" r="16"/>
        <circle cx="370" cy="190" r="16"/>
        <circle cx="210" cy="255" r="16"/>
        <circle cx="290" cy="255" r="16"/>
      </g>
      <g fill="currentColor" font-size="13" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="210" y="50">12</text>
        <text x="110" y="120">5</text>
        <text x="310" y="120">7</text>
        <text x="250" y="190">3</text>
        <text x="370" y="190">4</text>
        <text x="210" y="255">1</text>
        <text x="290" y="255">2</text>
      </g>
      <g fill="var(--home-muted)" font-size="10">
        <text x="150" y="82">0</text>
        <text x="268" y="82">1</text>
        <text x="270" y="152">0</text>
        <text x="348" y="152">1</text>
        <text x="220" y="222">0</text>
        <text x="280" y="222">1</text>
      </g>
    </svg>
  </div>

  <!-- 二叉排序树 -->
  <div v-else-if="type === 'bst'" class="ds-figure ds-figure--bst">
    <svg viewBox="0 0 360 230" role="img" aria-label="二叉排序树示例：50 是根，左子树都小于 50，右子树都大于 50">
      <text x="180" y="20" text-anchor="middle" font-size="12" font-weight="500" fill="currentColor">二叉排序树：左小右大，中序有序</text>
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="180" y1="55" x2="110" y2="120"/>
        <line x1="180" y1="55" x2="250" y2="120"/>
        <line x1="110" y1="120" x2="70" y2="185"/>
        <line x1="110" y1="120" x2="150" y2="185"/>
        <line x1="250" y1="120" x2="210" y2="185"/>
        <line x1="250" y1="120" x2="290" y2="185"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="180" cy="55" r="18"/>
        <circle cx="110" cy="120" r="18"/>
        <circle cx="250" cy="120" r="18"/>
        <circle cx="70" cy="185" r="18"/>
        <circle cx="150" cy="185" r="18"/>
        <circle cx="210" cy="185" r="18"/>
        <circle cx="290" cy="185" r="18"/>
      </g>
      <g fill="currentColor" font-size="12.5" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="180" y="55">50</text>
        <text x="110" y="120">30</text>
        <text x="250" y="120">70</text>
        <text x="70" y="185">20</text>
        <text x="150" y="185">40</text>
        <text x="210" y="185">60</text>
        <text x="290" y="185">80</text>
      </g>
    </svg>
  </div>

  <!-- 二分查找示意图 -->
  <div v-else-if="type === 'binary-search'" class="ds-figure ds-figure--binary-search">
    <svg viewBox="0 0 520 200" role="img" aria-label="二分查找：第一次 mid 在中间，key 比 mid 大就砍去左半区">
      <text x="260" y="20" text-anchor="middle" font-size="12" font-weight="500" fill="currentColor">二分查找：每次砍半</text>
      <!-- 数组格子 -->
      <g>
        <rect x="40" y="60" width="440" height="30" fill="none" stroke="var(--home-text-2)" stroke-opacity="0.55"/>
        <g fill="currentColor" font-size="12" font-weight="500" text-anchor="middle" dominant-baseline="middle">
          <text x="67" y="75">6</text>
          <text x="117" y="75">10</text>
          <text x="167" y="75">22</text>
          <text x="217" y="75">26</text>
          <text x="267" y="75">38</text>
          <text x="317" y="75">41</text>
          <text x="367" y="75">46</text>
          <text x="417" y="75">50</text>
          <text x="467" y="75">66</text>
        </g>
        <g fill="var(--home-muted)" font-size="9" text-anchor="middle">
          <text x="67" y="102">0</text>
          <text x="117" y="102">1</text>
          <text x="167" y="102">2</text>
          <text x="217" y="102">3</text>
          <text x="267" y="102">4</text>
          <text x="317" y="102">5</text>
          <text x="367" y="102">6</text>
          <text x="417" y="102">7</text>
          <text x="467" y="102">8</text>
        </g>
      </g>
      <!-- low 箭头 -->
      <g fill="#e07b3a" font-size="11" font-weight="600" text-anchor="middle">
        <path d="M55 125 L67 115 L79 125 Z" fill="#e07b3a"/>
        <text x="67" y="142">low</text>
      </g>
      <!-- high 箭头 -->
      <g fill="#e07b3a" font-size="11" font-weight="600" text-anchor="middle">
        <path d="M455 125 L467 115 L479 125 Z" fill="#e07b3a"/>
        <text x="467" y="142">high</text>
      </g>
      <!-- mid 箭头 -->
      <g fill="var(--accent, #3b82f6)" font-size="11" font-weight="600" text-anchor="middle">
        <path d="M255 125 L267 115 L279 125 Z" fill="var(--accent, #3b82f6)"/>
        <text x="267" y="142" fill="currentColor">mid</text>
      </g>
      <!-- mid=38 高亮 -->
      <rect x="242" y="58" width="50" height="34" fill="var(--accent, #3b82f6)" fill-opacity="0.18" stroke="var(--accent, #3b82f6)" stroke-width="1.3" rx="2"/>
      <!-- 砍半虚线 -->
      <line x1="290" y1="60" x2="290" y2="180" stroke="var(--home-text-2)" stroke-dasharray="4,3" stroke-opacity="0.4"/>
      <text x="297" y="170" fill="var(--home-muted)" font-size="10">a[mid]=38 &lt; key → 去右半区</text>
    </svg>
  </div>

  <!-- 哈希表链地址法示意图 -->
  <div v-else-if="type === 'hash-chain'" class="ds-figure ds-figure--hash-chain">
    <svg viewBox="0 0 440 220" role="img" aria-label="哈希表链地址法：数组每个槽挂一条链表">
      <text x="220" y="20" text-anchor="middle" font-size="12" font-weight="500" fill="currentColor">哈希表·链地址法</text>
      <!-- 哈希表数组 -->
      <g>
        <rect x="60" y="40" width="30" height="24" fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55"/>
        <rect x="60" y="64" width="30" height="24" fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55"/>
        <rect x="60" y="88" width="30" height="24" fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55"/>
        <rect x="60" y="112" width="30" height="24" fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55"/>
        <rect x="60" y="136" width="30" height="24" fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55"/>
        <rect x="60" y="160" width="30" height="24" fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55"/>
        <g fill="var(--home-muted)" font-size="9" text-anchor="middle">
          <text x="75" y="56">0</text>
          <text x="75" y="80">1</text>
          <text x="75" y="104">2</text>
          <text x="75" y="128">3</text>
          <text x="75" y="152">4</text>
          <text x="75" y="176">5</text>
        </g>
      </g>
      <!-- 槽 0：空 -->
      <text x="125" y="56" fill="var(--home-muted)" font-size="10">null</text>
      <!-- 槽 1：冲突，链表 27→19 -->
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55">
        <rect x="120" y="44" width="40" height="16"/>
        <rect x="180" y="44" width="40" height="16"/>
      </g>
      <g fill="currentColor" font-size="10" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="140" y="52">27</text>
        <text x="200" y="52">19</text>
      </g>
      <g stroke="var(--home-text-2)" stroke-width="1.2" fill="none">
        <line x1="90" y1="52" x2="118" y2="52"/>
        <line x1="160" y1="52" x2="178" y2="52"/>
        <path d="M220 52 L230 52" marker-end="url(#arrow)"/>
      </g>
      <!-- 槽 2：单元素 34 -->
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55">
        <rect x="120" y="68" width="40" height="16"/>
      </g>
      <text x="140" y="76" fill="currentColor" font-size="10" font-weight="500" text-anchor="middle" dominant-baseline="middle">34</text>
      <line x1="90" y1="76" x2="118" y2="76" stroke="var(--home-text-2)" stroke-width="1.2"/>
      <!-- 槽 3：空 -->
      <text x="125" y="104" fill="var(--home-muted)" font-size="10">null</text>
      <!-- 槽 4：冲突 8→14→20 -->
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55">
        <rect x="120" y="116" width="40" height="16"/>
        <rect x="180" y="116" width="40" height="16"/>
        <rect x="240" y="116" width="40" height="16"/>
      </g>
      <g fill="currentColor" font-size="10" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="140" y="124">8</text>
        <text x="200" y="124">14</text>
        <text x="260" y="124">20</text>
      </g>
      <g stroke="var(--home-text-2)" stroke-width="1.2">
        <line x1="90" y1="124" x2="118" y2="124"/>
        <line x1="160" y1="124" x2="178" y2="124"/>
        <line x1="220" y1="124" x2="238" y2="124"/>
      </g>
      <!-- 槽 5：单元素 11 -->
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55">
        <rect x="120" y="164" width="40" height="16"/>
      </g>
      <text x="140" y="172" fill="currentColor" font-size="10" font-weight="500" text-anchor="middle" dominant-baseline="middle">11</text>
      <line x1="90" y1="172" x2="118" y2="172" stroke="var(--home-text-2)" stroke-width="1.2"/>
      <!-- 箭头标记 -->
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--home-muted)"/>
        </marker>
      </defs>
      <!-- 下方说明 -->
      <text x="220" y="205" fill="var(--home-muted)" font-size="10" text-anchor="middle">key % 6 = 槽下标；冲突的元素挂同一条链表</text>
    </svg>
  </div>

  <!-- 二分查找判定树 -->
  <div v-else-if="type === 'bst-binary-search'" class="ds-figure ds-figure--bst-binary-search">
    <svg viewBox="0 0 380 250" role="img" aria-label="二分查找的判定树：叶子是 mid 比较后继续搜索的方向">
      <text x="190" y="20" text-anchor="middle" font-size="12" font-weight="500" fill="currentColor">二分查找的判定树（n=9）</text>
      <!-- 树结构 -->
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <line x1="190" y1="45" x2="90" y2="110"/>
        <line x1="190" y1="45" x2="290" y2="110"/>
        <line x1="90" y1="110" x2="40" y2="175"/>
        <line x1="90" y1="110" x2="140" y2="175"/>
        <line x1="290" y1="110" x2="240" y2="175"/>
        <line x1="290" y1="110" x2="340" y2="175"/>
        <line x1="40" y1="175" x2="15" y2="225"/>
        <line x1="40" y1="175" x2="65" y2="225"/>
      </g>
      <!-- 结点 -->
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.1">
        <circle cx="190" cy="45" r="15"/>
        <circle cx="90" cy="110" r="15"/>
        <circle cx="290" cy="110" r="15"/>
        <circle cx="40" cy="175" r="15"/>
        <circle cx="140" cy="175" r="15"/>
        <circle cx="240" cy="175" r="15"/>
        <circle cx="340" cy="175" r="15"/>
        <circle cx="15" cy="225" r="12"/>
        <circle cx="65" cy="225" r="12"/>
      </g>
      <!-- 数字 -->
      <g fill="currentColor" font-size="11" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="190" y="45">4</text>
        <text x="90" y="110">2</text>
        <text x="290" y="110">7</text>
        <text x="40" y="175">1</text>
        <text x="140" y="175">3</text>
        <text x="240" y="175">5</text>
        <text x="340" y="175">8</text>
        <text x="15" y="225">0</text>
        <text x="65" y="225">×</text>
      </g>
      <g fill="var(--home-muted)" font-size="9" text-anchor="middle">
        <text x="190" y="67">层数 1</text>
        <text x="90" y="132">层数 2</text>
        <text x="40" y="197">层数 3</text>
        <text x="15" y="245">层数 4</text>
      </g>
    </svg>
  </div>

  <!-- 无向图示例 -->
  <div v-else-if="type === 'graph'" class="ds-figure ds-figure--graph">
    <svg viewBox="0 0 360 230" role="img" aria-label="无向图示例：顶点 A 到 F，边用直线连接">
      <text x="180" y="20" text-anchor="middle" font-size="12" font-weight="500" fill="currentColor">无向图示例</text>
      <g stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.3">
        <line x1="60" y1="65" x2="180" y2="65"/>
        <line x1="180" y1="65" x2="300" y2="65"/>
        <line x1="60" y1="65" x2="60" y2="180"/>
        <line x1="180" y1="65" x2="180" y2="180"/>
        <line x1="300" y1="65" x2="300" y2="180"/>
        <line x1="60" y1="180" x2="180" y2="180"/>
        <line x1="180" y1="180" x2="300" y2="180"/>
      </g>
      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="60" cy="65" r="17"/>
        <circle cx="180" cy="65" r="17"/>
        <circle cx="300" cy="65" r="17"/>
        <circle cx="60" cy="180" r="17"/>
        <circle cx="180" cy="180" r="17"/>
        <circle cx="300" cy="180" r="17"/>
      </g>
      <g fill="currentColor" font-size="14" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="60" y="65">A</text>
        <text x="180" y="65">B</text>
        <text x="300" y="65">C</text>
        <text x="60" y="180">D</text>
        <text x="180" y="180">E</text>
        <text x="300" y="180">F</text>
      </g>
    </svg>
  </div>

  <!-- 带权无向图 / 最小生成树 -->
  <div v-else-if="type === 'weighted-graph'" class="ds-figure ds-figure--weighted-graph">
    <svg viewBox="0 0 360 250" role="img" aria-label="带权无向图：橙色边 A-B、B-C、C-D 是最小生成树，权值分别为 1、2、3">
      <text x="180" y="20" text-anchor="middle" font-size="12" font-weight="500" fill="currentColor">带权无向图：橙色为最小生成树</text>

      <g stroke="var(--home-text-2)" stroke-opacity="0.5" stroke-width="1.3">
        <line x1="60" y1="75" x2="180" y2="200"/>
        <line x1="180" y1="75" x2="180" y2="200"/>
      </g>
      <g stroke="var(--vp-c-brand-1)" stroke-width="1.7">
        <line x1="60" y1="75" x2="180" y2="75"/>
        <line x1="180" y1="75" x2="300" y2="75"/>
        <line x1="300" y1="75" x2="180" y2="200"/>
      </g>

      <g fill="var(--home-muted)" font-size="10.5" text-anchor="middle">
        <text x="120" y="63">1</text>
        <text x="240" y="63">2</text>
        <text x="106" y="145">4</text>
        <text x="192" y="145">5</text>
        <text x="254" y="145">3</text>
      </g>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="60" cy="75" r="17"/>
        <circle cx="180" cy="75" r="17"/>
        <circle cx="300" cy="75" r="17"/>
        <circle cx="180" cy="200" r="17"/>
      </g>
      <g fill="currentColor" font-size="14" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="60" y="75">A</text>
        <text x="180" y="75">B</text>
        <text x="300" y="75">C</text>
        <text x="180" y="200">D</text>
      </g>
    </svg>
  </div>

  <!-- AOV 网 / 拓扑排序 -->
  <div v-else-if="type === 'dag'" class="ds-figure ds-figure--dag">
    <svg viewBox="0 0 360 270" role="img" aria-label="AOV 网示例：A 指向 B 和 C，B、C 都指向 D">
      <defs>
        <marker id="ch5-arrow-dag" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--home-text-2)"/>
        </marker>
      </defs>

      <text x="180" y="20" text-anchor="middle" font-size="12" font-weight="500" fill="currentColor">AOV 网：箭头表示先后顺序</text>

      <g stroke="var(--home-text-2)" stroke-opacity="0.65" stroke-width="1.4">
        <line x1="168" y1="68" x2="110" y2="133" marker-end="url(#ch5-arrow-dag)"/>
        <line x1="192" y1="68" x2="250" y2="133" marker-end="url(#ch5-arrow-dag)"/>
        <line x1="107" y1="163" x2="165" y2="224" marker-end="url(#ch5-arrow-dag)"/>
        <line x1="253" y1="163" x2="195" y2="224" marker-end="url(#ch5-arrow-dag)"/>
      </g>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-opacity="0.55" stroke-width="1.2">
        <circle cx="180" cy="55" r="17"/>
        <circle cx="95" cy="150" r="17"/>
        <circle cx="265" cy="150" r="17"/>
        <circle cx="180" cy="240" r="17"/>
      </g>
      <g fill="currentColor" font-size="14" font-weight="500" text-anchor="middle" dominant-baseline="middle">
        <text x="180" y="55">A</text>
        <text x="95" y="150">B</text>
        <text x="265" y="150">C</text>
        <text x="180" y="240">D</text>
      </g>
    </svg>
  </div>
</template>
