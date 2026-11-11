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
</template>
