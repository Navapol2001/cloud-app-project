package cloud.app.project.server.repository

import cloud.app.project.server.model.CurrentAsset
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CurrentAssetRepo: JpaRepository<CurrentAsset, String> {
}