/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Hand picked from https://druid.apache.org/docs/latest/querying/sql.html

export const SQL_KEYWORDS = [
  'EXPLAIN PLAN FOR',
  'WITH',
  'AS',
  'SELECT',
  'ALL',
  'DISTINCT',
  'FROM',
  'WHERE',
  'GROUP BY',
  'CUBE',
  'ROLLUP',
  'GROUPING SETS',
  'HAVING',
  'ORDER BY',
  'ASC',
  'DESC',
  'LIMIT',
  'OFFSET',
  'UNION ALL',
  'JOIN',
  'LEFT',
  'INNER',
  'ON',
  'RIGHT',
  'OUTER',
  'FULL',
  'CROSS',
  'USING',
  'NATURAL',
  'FETCH',
  'FIRST',
  'NEXT',
  'ROW',
  'ROWS',
  'ONLY',
  'VALUES',
  'PARTITIONED BY',
  'CLUSTERED BY',
  'TIME',
  'INSERT INTO',
  'REPLACE INTO',
  'MERGE INTO',
  'OVERWRITE',
  'RETURNING',
  'OVER',
  'PARTITION BY',
  'WINDOW',
  'RANGE',
  'PRECEDING',
  'FOLLOWING',
  'CURRENT',
  'UNBOUNDED',
  'EXTEND',
  'PIVOT',
  'UNPIVOT',
  'MATCHED',
  'UPDATE SET',
];

export const SQL_EXPRESSION_PARTS = [
  'FILTER',
  'END',
  'ELSE',
  'WHEN',
  'THEN',
  'CASE',
  'OR',
  'AND',
  'NOT',
  'IN',
  'ANY',
  'SOME',
  'IS',
  'TO',
  'BETWEEN',
  'SYMMETRIC',
  'LIKE',
  'SIMILAR',
  'ESCAPE',
  'BOTH',
  'LEADING',
  'TRAILING',
  'EPOCH',
  'SECOND',
  'SECONDS',
  'MINUTE',
  'MINUTES',
  'HOUR',
  'HOURS',
  'DAY',
  'DAYS',
  'DOW',
  'DOY',
  'WEEK',
  'WEEKS',
  'MONTH',
  'MONTHS',
  'QUARTER',
  'QUARTERS',
  'YEAR',
  'YEARS',
  'TIMESTAMP',
  'INTERVAL',
  'CSV',
];

export const SQL_CONSTANTS = ['NULL', 'FALSE', 'TRUE'];

export const SQL_DYNAMICS = [
  'CURRENT_TIMESTAMP',
  'CURRENT_DATE',
  'LOCALTIME',
  'LOCALTIMESTAMP',
  'CURRENT_TIME',
];
