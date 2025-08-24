export const formatAmount = (amount: number, currency?: string): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
};

export const truncateText = (text: string, limit: number) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};
