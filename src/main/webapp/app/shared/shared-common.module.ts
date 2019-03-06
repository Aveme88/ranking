import { NgModule } from '@angular/core';

import { RankingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RankingSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RankingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RankingSharedCommonModule {}
