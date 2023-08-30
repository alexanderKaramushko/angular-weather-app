import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LocalStorageService } from './core/services/local-storage.service';
import { SnacksService } from './core/services/snacks.service';
import { AppState } from './core/store/core.store';
import { changeLanguageAction, changeThemeAction } from './core/store/settings/settings.actions';
import { Language, Theme } from './core/store/settings/settings.model';
import { languageSelector, themeSelector } from './core/store/settings/settings.selectors';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  theme$: Observable<Theme>;

  themes = Theme;

  language$: Observable<Language>;

  languages = Language;

  constructor(
    public store: Store<AppState>,
    private snacksService: SnacksService,
  ) {
    LocalStorageService.loadInitialState();
  }

  changeTheme(theme: Theme): void {
    this.store.dispatch(changeThemeAction({ theme }));
  }

  changeLanguage(language: Language): void {
    this.store.dispatch(changeLanguageAction({ language }));
  }

  ngOnInit(): void {
    this.theme$ = this.store.select(themeSelector);

    this.language$ = this.store.select(languageSelector);

    this.theme$.subscribe((theme) => {
      Object.values(Theme).forEach((themeItem) => {
        document.body.classList.remove(themeItem);
      });

      document.body.classList.add(theme);
    });
  }

}
