export interface Task{
  _id?: {$oid: string};
  name: string;
  created: string;
  end?: string;
  isDone: boolean;

}

// jest to intrfejs, ktory prezetuje nasze taski, ma swoje property, wlasciwosci, bedzie mozna je rozbudowac, serwis teraz operuje na listach z tymi obiektami task,

// zmieniamy formę interfejsy Task abysmy mogli go zapisac w chmurze Mlab
