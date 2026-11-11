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
  <div v-if="type === 'stack'" class="ds-figure">
    <svg viewBox="0 0 460 270" role="img" aria-label="栈的结构示意图：栈顶在 30 这一端，栈底在 10 这一端">
      <defs>
        <marker id="ch3-arrow-stack" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
        </marker>
        <marker id="ch3-arrow-stack-brand" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--vp-c-brand-1)"/>
        </marker>
      </defs>

      <text x="230" y="26" text-anchor="middle" font-size="13" fill="var(--vp-c-brand-1)">push 入栈 / pop 出栈</text>
      <line x1="230" y1="34" x2="230" y2="48" stroke="var(--vp-c-brand-1)" stroke-width="1.6" marker-end="url(#ch3-arrow-stack-brand)"/>

      <text x="135" y="78" text-anchor="end" font-size="15" fill="currentColor">栈顶 top</text>
      <line x1="143" y1="73" x2="165" y2="73" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-stack)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-width="1.5">
        <rect x="172" y="50" width="116" height="46" rx="8"/>
        <rect x="172" y="104" width="116" height="46" rx="8"/>
        <rect x="172" y="158" width="116" height="46" rx="8"/>
      </g>
      <g fill="currentColor" font-size="18" text-anchor="middle" dominant-baseline="middle">
        <text x="230" y="73">30</text>
        <text x="230" y="127">20</text>
        <text x="230" y="181">10</text>
      </g>

      <text x="135" y="187" text-anchor="end" font-size="15" fill="var(--home-muted)">栈底</text>

      <text x="310" y="78" font-size="12.5" fill="var(--home-muted)">最后进来，最先出去</text>
      <text x="310" y="186" font-size="12.5" fill="var(--home-muted)">最先进来，最后出去</text>
    </svg>
  </div>

  <!-- 两种 top 约定并排 -->
  <div v-else-if="type === 'top-compare'" class="ds-figures">
    <div class="ds-figure">
      <svg viewBox="0 0 360 225" role="img" aria-label="top 指向栈顶元素：top 指向 30 所在的位置">
        <defs>
          <marker id="ch3-arrow-top-l" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--vp-c-brand-1)"/>
          </marker>
        </defs>
        <text x="180" y="24" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">top 指向栈顶元素</text>
        <text x="182" y="47" text-anchor="middle" font-size="12" fill="var(--vp-c-brand-1)">top</text>
        <line x1="182" y1="52" x2="182" y2="68" stroke="var(--vp-c-brand-1)" stroke-width="1.5" marker-end="url(#ch3-arrow-top-l)"/>
        <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-width="1.4">
          <rect x="30" y="74" width="56" height="48" rx="7"/>
          <rect x="92" y="74" width="56" height="48" rx="7"/>
          <rect x="154" y="74" width="56" height="48" rx="7"/>
          <rect x="216" y="74" width="56" height="48" rx="7"/>
          <rect x="278" y="74" width="56" height="48" rx="7"/>
        </g>
        <g fill="currentColor" font-size="16" text-anchor="middle" dominant-baseline="middle">
          <text x="58" y="98">10</text>
          <text x="120" y="98">20</text>
          <text x="182" y="98">30</text>
        </g>
        <g fill="var(--home-muted)" font-size="11.5" text-anchor="middle">
          <text x="58" y="142">0</text>
          <text x="120" y="142">1</text>
          <text x="182" y="142">2</text>
          <text x="244" y="142">3</text>
          <text x="306" y="142">4</text>
        </g>
        <text x="180" y="178" text-anchor="middle" font-size="12" fill="var(--home-muted)">空栈：top = -1</text>
      </svg>
    </div>
    <div class="ds-figure">
      <svg viewBox="0 0 360 225" role="img" aria-label="top 指向栈顶的下一个空位：top 指向 3 号空位">
        <defs>
          <marker id="ch3-arrow-top-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--vp-c-brand-1)"/>
          </marker>
        </defs>
        <text x="180" y="24" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">top 指向栈顶的下一个空位</text>
        <text x="244" y="47" text-anchor="middle" font-size="12" fill="var(--vp-c-brand-1)">top</text>
        <line x1="244" y1="52" x2="244" y2="68" stroke="var(--vp-c-brand-1)" stroke-width="1.5" marker-end="url(#ch3-arrow-top-r)"/>
        <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-width="1.4">
          <rect x="30" y="74" width="56" height="48" rx="7"/>
          <rect x="92" y="74" width="56" height="48" rx="7"/>
          <rect x="154" y="74" width="56" height="48" rx="7"/>
          <rect x="216" y="74" width="56" height="48" rx="7"/>
          <rect x="278" y="74" width="56" height="48" rx="7"/>
        </g>
        <g fill="currentColor" font-size="16" text-anchor="middle" dominant-baseline="middle">
          <text x="58" y="98">10</text>
          <text x="120" y="98">20</text>
          <text x="182" y="98">30</text>
        </g>
        <text x="244" y="98" text-anchor="middle" font-size="11" fill="var(--home-muted)">空位</text>
        <g fill="var(--home-muted)" font-size="11.5" text-anchor="middle">
          <text x="58" y="142">0</text>
          <text x="120" y="142">1</text>
          <text x="182" y="142">2</text>
          <text x="244" y="142">3</text>
          <text x="306" y="142">4</text>
        </g>
        <text x="180" y="178" text-anchor="middle" font-size="12" fill="var(--home-muted)">空栈：top = 0</text>
      </svg>
    </div>
  </div>

  <!-- 链栈 -->
  <div v-else-if="type === 'linked-stack'" class="ds-figure">
    <svg viewBox="0 0 440 180" role="img" aria-label="链栈示意图：top 指向链表第一个结点">
      <defs>
        <marker id="ch3-arrow-lstack" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
        </marker>
      </defs>
      <text x="18" y="86" font-size="14" fill="currentColor">top</text>
      <line x1="52" y1="81" x2="76" y2="81" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-lstack)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-width="1.4">
        <rect x="82" y="54" width="100" height="54" rx="8"/>
        <rect x="200" y="54" width="100" height="54" rx="8"/>
        <rect x="318" y="54" width="100" height="54" rx="8"/>
      </g>
      <g stroke="var(--home-text-2)" stroke-width="1.2">
        <line x1="144" y1="54" x2="144" y2="108"/>
        <line x1="262" y1="54" x2="262" y2="108"/>
        <line x1="380" y1="54" x2="380" y2="108"/>
      </g>
      <g fill="currentColor" font-size="16" text-anchor="middle" dominant-baseline="middle">
        <text x="113" y="81">30</text>
        <text x="231" y="81">20</text>
        <text x="349" y="81">10</text>
      </g>
      <g fill="currentColor" font-size="13" text-anchor="middle" dominant-baseline="middle">
        <text x="172" y="81">●</text>
        <text x="290" y="81">●</text>
        <text x="408" y="81">∧</text>
      </g>

      <line x1="182" y1="81" x2="194" y2="81" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-lstack)"/>
      <line x1="300" y1="81" x2="312" y2="81" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-lstack)"/>

      <text x="220" y="148" text-anchor="middle" font-size="12" fill="var(--home-muted)">栈顶放在链表头，push / pop 都在头部完成，O(1)</text>
    </svg>
  </div>

  <!-- 队列 -->
  <div v-else-if="type === 'queue'" class="ds-figure">
    <svg viewBox="0 0 400 230" role="img" aria-label="队列示意图：front 指向队头元素，rear 指向队尾的下一个空位">
      <defs>
        <marker id="ch3-arrow-queue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
        </marker>
      </defs>
      <text x="60" y="26" text-anchor="middle" font-size="12" fill="var(--vp-c-brand-1)">出队</text>
      <text x="60" y="48" text-anchor="middle" font-size="12.5" fill="currentColor">front</text>
      <line x1="60" y1="54" x2="60" y2="70" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-queue)"/>

      <text x="258" y="26" text-anchor="middle" font-size="12" fill="var(--vp-c-brand-1)">入队</text>
      <text x="258" y="48" text-anchor="middle" font-size="12.5" fill="currentColor">rear</text>
      <line x1="258" y1="54" x2="258" y2="70" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-queue)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-width="1.4">
        <rect x="30" y="76" width="60" height="50" rx="7"/>
        <rect x="96" y="76" width="60" height="50" rx="7"/>
        <rect x="162" y="76" width="60" height="50" rx="7"/>
        <rect x="228" y="76" width="60" height="50" rx="7"/>
        <rect x="294" y="76" width="60" height="50" rx="7"/>
      </g>
      <g fill="currentColor" font-size="16" text-anchor="middle" dominant-baseline="middle">
        <text x="60" y="101">10</text>
        <text x="126" y="101">20</text>
        <text x="192" y="101">30</text>
      </g>
      <g fill="var(--home-muted)" font-size="11.5" text-anchor="middle">
        <text x="60" y="146">0</text>
        <text x="126" y="146">1</text>
        <text x="192" y="146">2</text>
        <text x="258" y="146">3</text>
        <text x="324" y="146">4</text>
      </g>
      <text x="200" y="185" text-anchor="middle" font-size="12" fill="var(--home-muted)">front 指向队头元素，rear 指向队尾的下一个位置</text>
    </svg>
  </div>

  <!-- 循环队列 -->
  <div v-else-if="type === 'circular-queue'" class="ds-figure">
    <svg viewBox="0 0 420 285" role="img" aria-label="循环队列示意图：数组首尾相接，front 指向队头，rear 指向队尾的下一个位置">
      <defs>
        <marker id="ch3-arrow-cqueue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
        </marker>
        <marker id="ch3-arrow-cqueue-brand" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--vp-c-brand-1)"/>
        </marker>
      </defs>

      <text x="116" y="30" text-anchor="middle" font-size="12.5" fill="currentColor">front</text>
      <line x1="116" y1="36" x2="116" y2="52" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-cqueue)"/>
      <text x="293" y="30" text-anchor="middle" font-size="12.5" fill="currentColor">rear</text>
      <line x1="293" y1="36" x2="293" y2="52" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-cqueue)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-width="1.4">
        <rect x="30" y="58" width="54" height="50" rx="7"/>
        <rect x="89" y="58" width="54" height="50" rx="7"/>
        <rect x="148" y="58" width="54" height="50" rx="7"/>
        <rect x="207" y="58" width="54" height="50" rx="7"/>
        <rect x="266" y="58" width="54" height="50" rx="7"/>
        <rect x="325" y="58" width="54" height="50" rx="7"/>
      </g>
      <g fill="currentColor" font-size="16" text-anchor="middle" dominant-baseline="middle">
        <text x="116" y="83">20</text>
        <text x="175" y="83">30</text>
        <text x="234" y="83">40</text>
      </g>
      <g fill="var(--home-muted)" font-size="11.5" text-anchor="middle">
        <text x="57" y="128">0</text>
        <text x="116" y="128">1</text>
        <text x="175" y="128">2</text>
        <text x="234" y="128">3</text>
        <text x="293" y="128">4</text>
        <text x="352" y="128">5</text>
      </g>

      <path d="M 352 140 C 352 178, 57 178, 57 140" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="1.5" marker-end="url(#ch3-arrow-cqueue-brand)"/>
      <text x="205" y="198" text-anchor="middle" font-size="11.5" fill="var(--vp-c-brand-1)">首尾相接</text>

      <text x="210" y="240" text-anchor="middle" font-size="12" fill="var(--home-muted)">front = 1，rear = 4，元素个数 = (4-1+6)%6 = 3</text>
    </svg>
  </div>

  <!-- 链队列 -->
  <div v-else-if="type === 'linked-queue'" class="ds-figure">
    <svg viewBox="0 0 460 210" role="img" aria-label="链队列示意图：front 指向队头结点，rear 指向队尾结点">
      <defs>
        <marker id="ch3-arrow-lqueue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor"/>
        </marker>
      </defs>

      <text x="18" y="96" font-size="14" fill="currentColor">front</text>
      <line x1="58" y1="91" x2="82" y2="91" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-lqueue)"/>

      <text x="356" y="36" text-anchor="middle" font-size="14" fill="currentColor">rear</text>
      <line x1="356" y1="42" x2="356" y2="60" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-lqueue)"/>

      <g fill="var(--home-bg)" stroke="var(--home-text-2)" stroke-width="1.4">
        <rect x="88" y="62" width="100" height="54" rx="8"/>
        <rect x="206" y="62" width="100" height="54" rx="8"/>
        <rect x="324" y="62" width="100" height="54" rx="8"/>
      </g>
      <g stroke="var(--home-text-2)" stroke-width="1.2">
        <line x1="150" y1="62" x2="150" y2="116"/>
        <line x1="268" y1="62" x2="268" y2="116"/>
        <line x1="386" y1="62" x2="386" y2="116"/>
      </g>
      <g fill="currentColor" font-size="16" text-anchor="middle" dominant-baseline="middle">
        <text x="119" y="89">10</text>
        <text x="237" y="89">20</text>
        <text x="355" y="89">30</text>
      </g>
      <g fill="currentColor" font-size="13" text-anchor="middle" dominant-baseline="middle">
        <text x="178" y="89">●</text>
        <text x="296" y="89">●</text>
        <text x="414" y="89">∧</text>
      </g>
      <line x1="188" y1="89" x2="200" y2="89" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-lqueue)"/>
      <line x1="306" y1="89" x2="318" y2="89" stroke="currentColor" stroke-width="1.5" marker-end="url(#ch3-arrow-lqueue)"/>

      <text x="230" y="166" text-anchor="middle" font-size="12" fill="var(--home-muted)">队头出队，队尾入队；删除最后一个结点时 rear 也要改</text>
    </svg>
  </div>
</template>
