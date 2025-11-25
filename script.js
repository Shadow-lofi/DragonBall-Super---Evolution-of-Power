const ctx = document.getElementById('powerChart').getContext('2d');
          const powerChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: [
                'Goku Base (Super)',
                'Goku SsjG (Battle of Gods)',
                'Goku Ssj Blue (Zero Mortals)',
                'Goku Base (ToP)',
                'Goku Super Saiyan God (ToP)',
                'Goku Super Saiyan Blue (ToP)',
                'Goku Ultra Instinct - Sign (ToP)',
                'Goku Ultra Instinct Mastered (ToP)',
                'Goku Ultra Instinct (Granolah)',
                'Goku Ultra Instinct Perfected(Granolah)',
                'Vegeta Base (Super)',
                'Vegeta Base (ToP)',
                'Vegeta Super Saiyan Blue (ToP)',
                'Vegeta Super Saiyan Blue Evolution',
                'Vegeta Super Saiyan God (Broly)',
                'Vegeta Ultra Ego (Granolah)',
                'Gohan Base (Super)',
                'Gohan Ultimate (ToP)',
                'Gohan Base (Super Hero)',
                'Gohan Ultimate (Super Hero)',
                'Gohan Beast (Super Hero)',
                'Piccolo Base (Super Hero)',
                'Piccolo Orange',
                'Frieza Base (ToP)',
                'Frieza Golden (ToP)',
                'Frieza Black (Granolah)',
                'Jiren Base (ToP)',
                'Jiren Super Full Power'
              ],
              datasets: [{
                label: 'Power Levels (Log Scale)',
                data: [
                  80000000,
                  10000000000000,
                  91000000000000,
                  105000000000000,
                  205000000000000,
                  400000000000000,
                  2500000000000000,
                  15000000000000000000,
                  1050000000000000000000,
                  1e24,
                  78000000,
                  102000000000000,
                  375500000000000,
                  620500000000000,
                  920000000000000,
                  0.5e24,
                  12000000,
                  350000000000000,
                  1000000000000,
                  2000000000000000000,
                  1.5e24,
                  7000000000000,
                  50000000000000000000,
                  76000000000000,
                  276000000000000,
                  10e24,
                  3000000000000000000,
                  14000000000000000000
                ],
                backgroundColor: '#f77f00'
              }]
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  type: 'logarithmic'
                }
              },
            animation: {
                duration: 2000,
                easing: 'easeInOutBounce',
                delay: (context) => {
                  if (context.type === 'data' && context.mode === 'default' && !context.chart._animationsDisabled) {
                    return context.dataIndex * 300;
                  }
                  return 0;
                }
              }
            }
          });

           function comparePowerLevels() {
           const char1 = parseFloat(document.getElementById('char1').value);
           const char2 = parseFloat(document.getElementById('char2').value);
           const result = document.getElementById('result');
           let message;
           if(char1 > char2) {
                message = 'Character 1 is stronger!';
              } else if(char1 < char2) {
                message = 'Character 2 is stronger!';
              } else {
                message = 'They are evenly matched!';
              }
              result.textContent = message;
              result.classList.remove('reveal');
              void result.offsetWidth;
              result.classList.add('reveal');
           }

           const acc = document.getElementsByClassName('accordion');
           for(let i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function() {
                this.classList.toggle('active');
                const panel = this.nextElementSibling;
                if(panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
             });
           }