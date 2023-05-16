// Copyright 2019-2022 @subwallet/sub-connect authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
export function useLocalStorage (
  key: string,
  initialValue = ''
): [string, (v: string) => void] {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const item =
      typeof window !== 'undefined' ? window.localStorage.getItem(key) : false;

    if (isString(item)) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setStoredValue(JSON.parse(item));
      } catch (e) {
        setStoredValue(initialValue);
      }
    } else {
      setStoredValue(initialValue);
    }
  }, [initialValue, key, setStoredValue]);

  const setValue = (value: string) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
