package cloud.app.project.server.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "longterm_asset")
data class LongtermAsset (
    @Id
    val accounting_id: String,
    val accounting_name: String,
    val asset_type: String,
    val amount: Double,
    val amount_adjustment: Double
)