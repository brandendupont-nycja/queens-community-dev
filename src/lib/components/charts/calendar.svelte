<script lang="ts">
import { startOfYear, endOfYear } from 'date-fns';
import { scaleThreshold } from 'd3-scale';
import { range } from 'd3-array';
import { addMinutes, startOfDay, startOfToday, subDays } from 'date-fns';
import { cumsum } from 'd3-array';
import { Calendar, Chart, Group, Text, Tooltip, Svg } from 'layerchart';



const now = new Date();
const firstDayOfYear = startOfYear(now);
const lastDayOfYear = endOfYear(now);

import data from "./df_count.csv"


function getRandomInteger(min: number, max: number, includeMax = true) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + (includeMax ? 1 : 0)) + min);
}

function createDateSeries<TKey extends string>(options: {
    count?: number;
    min: number;
    max: number;
    keys?: TKey[];
    value?: 'number' | 'integer';
  }) {
    const now = startOfToday();
  
    const count = options.count ?? 10;
    const min = options.min;
    const max = options.max;
    const keys = options.keys ?? ['value'];
  
    return Array.from({ length: count }).map((_, i) => {
      return {
        date: subDays(now, count - i - 1),
        ...Object.fromEntries(
          keys.map((key) => {
            return [
              key,
              options.value === 'integer' ? getRandomInteger(min, max) : getRandomInteger(min, max),
            ];
          })
        ),
      } as { date: Date } ;
    });
  }

const data2 = createDateSeries({ count: 365 * 5, min: 10, max: 100, value: 'integer' }).map(
(d) => {
    return {
    ...d,
    value: Math.random() > 0.2 ? d.value : null, // set null for some values
    };
}
);



const data3 = [{date: new Date("2024-01-02"), value:1 },
{date:new Date("2024-01-03"), value:2 } 
]
{console.log(data3)}
{console.log(data2)}
{console.log(data)}
</script>

  
  <div class="mx-auto max-w-[800px]">


  <div class="h-[700px] p-4  rounded ">
    <Chart
      {data}
      x="date"
      c="value" 
      cScale={scaleThreshold().unknown('transparent')}
      cDomain={[1,4,6]}
      cRange={[
        "#bfdaf6",
        "#bfdaf6",
        "#84c3fb",
        "#00aeff",
        "#00aeff",
      ]}
      let:tooltip
    >
      <Svg>
        {#each range(2021, 2025) as year, i}
          {@const start = new Date(year, 0, 1)}
          {@const end = endOfYear(start)}
          <Group y={140 * i}>
            <Text
              value={year}
              class="text-xs"
              rotate={270}
              x={-20}
              y={(16 * 7) / 2}
              textAnchor="middle"
              verticalAnchor="start"
            />
            <Calendar {start} {end} {tooltip} cellSize={16} monthPath />
          </Group>
        {/each}
      </Svg>

      <Tooltip.Root let:data>
        <Tooltip.Header>{data.full_date}</Tooltip.Header>
  
        {#if data.value != null}
          <Tooltip.List>
            <Tooltip.Item
              label="Number of Events:"
              value={data.value}
              format="integer"
              valueAlign="right"
            />
          </Tooltip.List>
        {/if}
      </Tooltip.Root>


 
    </Chart>
  </div>
</div>