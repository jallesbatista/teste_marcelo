export function CPFMask(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2");
  value = value.replace(/(-\d{2})\d+?$/, "$1");
  e.target.value = value;
  return e;
}

export function OnlyNumbersMask(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  e.target.value = value;
  return e;
}

export function PhoneMask(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(^\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{4,5})(\d{4}$)/, "$1-$2");
  e.target.value = value;
  return e;
}

export const BrlCurrencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = `R$ ${value}`;
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.target.value = value;
  return e;
};
